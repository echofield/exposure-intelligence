// Base URL: empty string = same-origin (production).
// Override via window.EXPOSURE_ENGINE_URL for cross-origin deploys.
const BASE: string = typeof window !== 'undefined'
  ? ((window as unknown as Record<string, unknown>).EXPOSURE_ENGINE_URL as string ?? '')
  : ''

export interface Product {
  id: string
  tier: string
  title: string
  buyerFrame: string
}

export interface DossierOptions {
  partnerFirmName: string
  partnerLogoPlaceholder: string
  preparedFor: string
  productName: string
  dateBasis: string
  reference: string
  reviewStatus: 'draft' | 'reviewed' | 'partner-ready'
  disclaimerBlock: string
}

export interface GenerateRequest {
  productId: string
  intake: Record<string, unknown>
  options: DossierOptions
}

export interface GenerateResult {
  ok: boolean
  reference: string
  metadata: Record<string, string>
  reviewStatus: string
  product: { id: string; tier: string; title: string }
  markdown: string
  error?: string
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE}/products`)
  if (!res.ok) throw new Error(`/products ${res.status}`)
  const data = await res.json()
  return data.products
}

export async function generateDossier(req: GenerateRequest): Promise<GenerateResult> {
  const res = await fetch(`${BASE}/dossiers/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  })
  const data = await res.json()
  if (!res.ok || !data.ok) throw new Error(data.error || `Erreur serveur ${res.status}`)
  return data
}

export async function exportPdf(req: GenerateRequest): Promise<{ blob: Blob; filename: string }> {
  const res = await fetch(`${BASE}/dossiers/export-pdf`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error((err as Record<string, string>).error || `Export PDF échoué: ${res.status}`)
  }
  const disposition = res.headers.get('Content-Disposition') ?? ''
  const match = disposition.match(/filename="([^"]+)"/)
  const filename = match?.[1] ?? 'dossier.pdf'
  const blob = await res.blob()
  return { blob, filename }
}
