import React, { useState, useEffect } from 'react'
import MarkdownView from '../demo/MarkdownView'

export default function SamplePage() {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/samples/FR-CORPORATE-MID_SAMPLE.md')
      .then(r => r.text())
      .then(text => { setContent(text); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#f5f0e8' }}>
      {/* Minimal nav strip */}
      <div
        className="border-b border-ink/12 px-5 py-3.5 flex items-center justify-between"
        style={{ background: '#fffdf6' }}
      >
        <a
          href="/"
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/40 hover:text-ink/70 transition-colors"
        >
          ← Exposure Intelligence
        </a>
        <div className="hidden sm:flex items-center gap-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-copper">
            AI Exposure Evidence Pack
          </span>
          <span className="font-mono text-[10px] text-ink/25">EI-FR-MID-001</span>
        </div>
        <a
          href="/#inquiry"
          className="font-mono text-[11px] uppercase tracking-[0.10em] font-bold text-steel hover:text-navy transition-colors border-b border-steel/50 pb-px"
        >
          Demande partenaire →
        </a>
      </div>

      <div className="max-w-[880px] mx-auto px-4 sm:px-6 py-8 pb-20">
        {/* Classification strip */}
        <div className="mb-5 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink/25">
            Archétype FR-CORPORATE-MID · Usage partenaire
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink/25">
            Specimen — non destiné à la distribution
          </span>
        </div>

        {loading ? (
          <div className="py-32 text-center font-mono text-[11px] uppercase tracking-widest text-ink/25">
            Chargement…
          </div>
        ) : content ? (
          <div
            className="border border-ink/12 shadow-[0_32px_80px_rgba(28,31,27,0.10)]"
            style={{ background: '#fffdf6', padding: 'clamp(28px,5vw,60px)' }}
          >
            <MarkdownView markdown={content} />
          </div>
        ) : (
          <p className="py-32 text-center font-mono text-[11px] text-red-500">
            Dossier introuvable.
          </p>
        )}

        {/* Footer CTA */}
        {!loading && content && (
          <div className="mt-10 border-t border-ink/10 pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <p className="text-[14px] text-ink-soft leading-[1.55] max-w-[520px]">
              Ce dossier est construit sur archétype. Aucune donnée client ingérée. Votre cabinet le déploie sous son en-tête.
            </p>
            <a
              href="/#inquiry"
              className="flex-shrink-0 font-mono text-[12px] font-bold uppercase tracking-[0.10em] text-steel hover:text-navy transition-colors border-b border-steel pb-px"
            >
              Devenir partenaire →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
