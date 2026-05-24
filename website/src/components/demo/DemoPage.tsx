import React, { useState, useEffect } from 'react'
import { fetchProducts, generateDossier, exportPdf } from '../../api/engine'
import type { Product, DossierOptions, GenerateResult } from '../../api/engine'
import MarkdownView from './MarkdownView'

// Embedded sample intakes — archetype-based, no client data
const INTAKES: Record<string, Record<string, unknown>> = {
  'fr-corporate-mid': {
    archetypeId: 'FR-CORPORATE-MID',
    jurisdiction: 'FR',
    sector: 'B2B_SERVICES',
    companySize: 'mid-market',
    revenueBand: 'EUR 150-200M',
    employeeBand: '500-1500',
    aiSurfaceCategories: ['PRODUCTIVITY_TOOLS', 'DECISION_SUPPORT'],
    businessFunctions: ['COMMERCIAL', 'HR', 'OPERATIONS', 'EXECUTIVE'],
    deploymentModels: ['EMBEDDED_SAAS', 'VENDOR_MANAGED'],
    regulatorySensitivity: 'Medium',
    externalDependencyLevel: 'Moderate',
    knownTools: [
      {
        name: 'Microsoft 365 Copilot',
        type: 'Productivity AI',
        deploymentModel: 'EMBEDDED_SAAS',
        businessFunction: 'All functions',
        dataCategories: 'Emails collaborateurs, transcriptions de réunions, documents internes',
        oversightLevel: 'Non documenté à niveau archétype',
      },
      {
        name: 'Assistant de scoring CRM',
        type: 'Decision support',
        deploymentModel: 'VENDOR_MANAGED',
        businessFunction: 'COMMERCIAL, HR',
        dataCategories: 'Dossiers clients, prospects, métriques commerciales RH',
        oversightLevel: 'Informel ou non documenté',
      },
    ],
    assumptions: [
      "L'entité utilise les conditions générales standard du prestataire sauf indication contraire.",
      "Aucun système de production n'a été intégré pour cet artefact.",
      "L'artefact est généré exclusivement depuis des données archétype.",
    ],
  },
  'pe-saas-target': {
    archetypeId: 'PE-SAAS-TARGET',
    jurisdiction: 'FR',
    sector: 'TECH',
    companySize: 'mid-market',
    revenueBand: 'EUR 50-200M',
    employeeBand: '250-1000',
    aiSurfaceCategories: ['THIRD_PARTY_LLM', 'DECISION_SUPPORT', 'GENERATIVE_CONTENT'],
    businessFunctions: ['PRODUCT', 'COMMERCIAL', 'OPERATIONS', 'LEGAL_COMPLIANCE'],
    deploymentModels: ['STANDALONE_API', 'VENDOR_MANAGED', 'HYBRID'],
    regulatorySensitivity: 'High',
    externalDependencyLevel: 'High',
    vendorDependencies: [
      {
        vendor: 'Fournisseur de modèle fondation',
        component: 'Inférence et embeddings',
        criticality: 'Critical',
        reversibility: 'Not tested',
        contractCoverage: 'Partial',
        notes: "Aucun benchmark de substitution de modèle fourni à l'archétype.",
      },
      {
        vendor: 'Fournisseur de base vectorielle',
        component: 'Index de récupération',
        criticality: 'High',
        reversibility: 'Difficult',
        contractCoverage: 'Partial',
        notes: "Comportement d'export et de suppression à vérifier.",
      },
    ],
    evidenceAvailable: {
      aiUseCaseRegister: false,
      vendorRegister: false,
      retentionMap: false,
      subProcessorSchedule: false,
      modelSubstitutionBenchmark: false,
    },
    assumptions: [
      "L'acquéreur évalue la dépendance IA avant la signature.",
      "Les fonctionnalités IA influencent le positionnement produit et la rétention clients.",
      "Des données clients peuvent entrer dans les prompts sauf preuve contraire.",
    ],
  },
}

const INTAKE_LABELS: Record<string, string> = {
  'fr-corporate-mid': 'FR-CORPORATE-MID — Services B2B · France · Mid-market',
  'pe-saas-target':   'PE-SAAS-TARGET — SaaS · Transaction · Dépendance élevée',
}

const today = new Date().toISOString().slice(0, 10)

const DEFAULT_OPTIONS: DossierOptions = {
  partnerFirmName: '',
  partnerLogoPlaceholder: '[Logo cabinet]',
  preparedFor: '',
  productName: '',
  dateBasis: today,
  reference: '',
  reviewStatus: 'draft',
  disclaimerBlock: 'Cet artefact fait remonter des conditions. Le conseil nomme la loi.',
}

type BackendStatus = 'unknown' | 'ok' | 'down'

export default function DemoPage() {
  const [products, setProducts]     = useState<Product[]>([])
  const [productId, setProductId]   = useState('ai-exposure-evidence-pack')
  const [intakeKey, setIntakeKey]   = useState<string>('fr-corporate-mid')
  const [options, setOptions]       = useState<DossierOptions>(DEFAULT_OPTIONS)
  const [result, setResult]         = useState<GenerateResult | null>(null)
  const [generating, setGenerating] = useState(false)
  const [exporting, setExporting]   = useState(false)
  const [error, setError]           = useState<string | null>(null)
  const [backend, setBackend]       = useState<BackendStatus>('unknown')

  // Health check + product list
  useEffect(() => {
    fetch('/health')
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(() => setBackend('ok'))
      .catch(() => setBackend('down'))

    fetchProducts()
      .then(ps => {
        setProducts(ps)
        if (ps.length > 0) setOptions(o => ({ ...o, productName: ps[0].title }))
      })
      .catch(() => {})
  }, [])

  // Keep productName in sync when product selection changes
  const handleProductChange = (id: string) => {
    setProductId(id)
    const p = products.find(p => p.id === id)
    if (p) setOptions(o => ({ ...o, productName: p.title }))
  }

  const setOption = <K extends keyof DossierOptions>(key: K, value: DossierOptions[K]) => {
    setOptions(o => ({ ...o, [key]: value }))
  }

  const handleGenerate = async () => {
    setGenerating(true)
    setError(null)
    setResult(null)
    try {
      const ref = options.reference.trim() || `DEMO-${Date.now().toString(36).toUpperCase().slice(-6)}`
      const r = await generateDossier({
        productId,
        intake: INTAKES[intakeKey],
        options: { ...options, reference: ref },
      })
      setResult(r)
      if (!options.reference.trim()) setOption('reference', ref)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Erreur lors de la génération.')
    } finally {
      setGenerating(false)
    }
  }

  const handleExportPdf = async () => {
    if (!result) return
    setExporting(true)
    setError(null)
    try {
      const { blob, filename } = await exportPdf({
        productId,
        intake: INTAKES[intakeKey],
        options: { ...options, reference: result.reference },
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Erreur lors de l'export PDF.")
    } finally {
      setExporting(false)
    }
  }

  const radioClass = (selected: boolean) =>
    `flex items-start gap-2.5 p-3 border cursor-pointer transition-colors duration-100 ${
      selected
        ? 'border-steel/50 bg-steel/8 text-ink'
        : 'border-ink/10 bg-white/40 hover:border-ink/20 text-ink-soft'
    }`

  return (
    <div className="min-h-screen bg-paper font-sans text-ink flex flex-col">

      {/* Top bar */}
      <header className="flex-shrink-0 flex items-center justify-between gap-4 px-5 py-3 border-b border-ink/10 bg-paper/90 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="font-mono text-[10px] uppercase tracking-widest text-ink/35 hover:text-ink/70 transition-colors"
          >
            ← Site
          </a>
          <span className="text-ink/15 select-none">|</span>
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 grid place-items-center bg-ink text-paper font-serif text-[11px] flex-shrink-0">
              EI
            </span>
            <span className="text-[12px] font-bold uppercase tracking-[0.08em]">
              Démonstration partenaire
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {backend === 'down' && (
            <span className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 border border-high/30 bg-high/8 text-high text-[10px] font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-high flex-shrink-0" />
              Moteur hors ligne — npm run engine:server
            </span>
          )}
          {backend === 'ok' && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 border border-low/30 bg-low/8 text-low text-[10px] font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-low flex-shrink-0" />
              Moteur actif
            </span>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0">

        {/* Left: configuration */}
        <aside className="w-full lg:w-[400px] flex-shrink-0 border-r border-ink/10 bg-[rgba(250,248,241,0.55)] overflow-y-auto">
          <div className="p-6 space-y-8">

            {/* 01 — Product */}
            <section>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink/35 mb-3">
                01 — Produit
              </p>
              <div className="space-y-1.5">
                {products.length === 0 && (
                  <p className="text-[11px] font-mono text-ink/35 py-2">
                    {backend === 'down' ? 'Moteur non disponible.' : 'Chargement…'}
                  </p>
                )}
                {products.map(p => (
                  <label key={p.id} className={radioClass(productId === p.id)}>
                    <input
                      type="radio"
                      name="product"
                      value={p.id}
                      checked={productId === p.id}
                      onChange={() => handleProductChange(p.id)}
                      className="mt-0.5 accent-navy flex-shrink-0"
                    />
                    <div>
                      <p className="text-[13px] font-medium leading-tight">{p.title}</p>
                      <p className="text-[10px] font-mono text-ink/35 mt-0.5">
                        {p.tier} · {p.buyerFrame}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </section>

            {/* 02 — Archetype */}
            <section>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink/35 mb-3">
                02 — Archétype de test
              </p>
              <div className="space-y-1.5">
                {Object.entries(INTAKE_LABELS).map(([key, label]) => (
                  <label key={key} className={radioClass(intakeKey === key)}>
                    <input
                      type="radio"
                      name="intake"
                      value={key}
                      checked={intakeKey === key}
                      onChange={() => setIntakeKey(key)}
                      className="mt-0.5 accent-navy flex-shrink-0"
                    />
                    <p className="text-[11px] font-mono leading-tight">{label}</p>
                  </label>
                ))}
              </div>
            </section>

            {/* 03 — Partner metadata */}
            <section>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink/35 mb-3">
                03 — Métadonnées cabinet
              </p>
              <div className="space-y-3">
                {(
                  [
                    { field: 'partnerFirmName', label: 'Nom du cabinet',   placeholder: 'Cabinet Demo' },
                    { field: 'preparedFor',     label: 'Préparé pour',     placeholder: "Comité d'investissement" },
                    { field: 'reference',       label: 'Référence',        placeholder: 'DEMO-001' },
                  ] as const
                ).map(({ field, label, placeholder }) => (
                  <div key={field}>
                    <label className="block text-[10px] font-mono text-ink/40 mb-1 uppercase tracking-widest">
                      {label}
                    </label>
                    <input
                      type="text"
                      value={options[field]}
                      onChange={e => setOption(field, e.target.value)}
                      placeholder={placeholder}
                      className="w-full px-3 py-2 text-[12px] border border-ink/12 bg-white/55 text-ink placeholder:text-ink/25 focus:outline-none focus:border-steel/50"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[10px] font-mono text-ink/40 mb-1 uppercase tracking-widest">
                    Date de référence
                  </label>
                  <input
                    type="date"
                    value={options.dateBasis}
                    onChange={e => setOption('dateBasis', e.target.value)}
                    className="w-full px-3 py-2 text-[12px] border border-ink/12 bg-white/55 text-ink focus:outline-none focus:border-steel/50"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-ink/40 mb-1 uppercase tracking-widest">
                    Statut de revue
                  </label>
                  <select
                    value={options.reviewStatus}
                    onChange={e => setOption('reviewStatus', e.target.value as DossierOptions['reviewStatus'])}
                    className="w-full px-3 py-2 text-[12px] border border-ink/12 bg-white/55 text-ink focus:outline-none focus:border-steel/50"
                  >
                    <option value="draft">Brouillon</option>
                    <option value="reviewed">Révisé</option>
                    <option value="partner-ready">Prêt partenaire</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-ink/40 mb-1 uppercase tracking-widest">
                    Clause de non-responsabilité
                  </label>
                  <textarea
                    value={options.disclaimerBlock}
                    onChange={e => setOption('disclaimerBlock', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 text-[11px] font-mono border border-ink/12 bg-white/55 text-ink focus:outline-none focus:border-steel/50 resize-none leading-[1.5]"
                  />
                </div>
              </div>
            </section>

            {/* Generate */}
            <div className="space-y-2">
              <button
                onClick={handleGenerate}
                disabled={generating || backend === 'down' || products.length === 0}
                className="w-full py-3.5 bg-navy text-white text-[12px] font-bold uppercase tracking-[0.1em] border border-navy disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:-translate-y-px transition-transform duration-150"
              >
                {generating ? 'Génération en cours…' : 'Générer le dossier'}
              </button>

              {error && (
                <p className="px-3 py-2 border border-critical/30 bg-critical/8 text-critical text-[11px] font-mono">
                  {error}
                </p>
              )}
            </div>
          </div>
        </aside>

        {/* Right: preview */}
        <main className="flex-1 flex flex-col min-h-0 min-w-0">

          {/* Preview toolbar */}
          <div className="flex-shrink-0 flex items-center justify-between gap-4 px-6 py-3 border-b border-ink/10">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35">
              Aperçu du dossier
            </p>
            {result && (
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-ink/35">{result.reference}</span>
                <button
                  onClick={handleExportPdf}
                  disabled={exporting}
                  className="flex items-center gap-1.5 px-4 py-1.5 bg-navy text-white text-[11px] font-bold font-mono uppercase tracking-[0.1em] disabled:opacity-50 hover:enabled:-translate-y-px transition-transform duration-150"
                >
                  {exporting ? 'Export…' : 'Exporter PDF ↓'}
                </button>
              </div>
            )}
          </div>

          {/* Preview body */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {!result && !generating && (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div
                  className="grid gap-px mb-8 w-36 h-20"
                  style={{ gridTemplateColumns: 'repeat(9, 1fr)' }}
                  aria-hidden
                >
                  {Array.from({ length: 27 }, (_, k) => (
                    <div
                      key={k}
                      className={`border border-ink/8 ${[2, 7, 11, 18, 22].includes(k) ? 'animate-cell-pulse' : 'bg-ink/5'}`}
                      style={{ animationDelay: `${k * 0.12}s` }}
                    />
                  ))}
                </div>
                <p className="font-serif text-[18px] text-ink/50">Aucun dossier généré</p>
                <p className="mt-2 text-[12px] font-mono text-ink/30 max-w-[300px] leading-[1.6]">
                  Sélectionnez un produit et un archétype,<br />puis cliquez sur Générer.
                </p>
              </div>
            )}

            {generating && (
              <div className="flex flex-col items-center justify-center h-full py-16">
                <div
                  className="grid gap-px mb-6 w-28 h-16"
                  style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}
                  aria-hidden
                >
                  {Array.from({ length: 14 }, (_, k) => (
                    <div
                      key={k}
                      className="border border-ink/10 animate-cell-pulse"
                      style={{ animationDelay: `${k * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="font-mono text-[11px] text-ink/40 uppercase tracking-widest">
                  Génération en cours…
                </p>
              </div>
            )}

            {result && !generating && (
              <MarkdownView markdown={result.markdown} />
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
