import React from 'react'
import { useTranslation } from 'react-i18next'
import LangToggle from '../ui/LangToggle'
import SeverityBadge from '../ui/SeverityBadge'

type Vertical = 'avocat' | 'cgp'
type Signal = { label: string; severity: string }

// Color accent per vertical: navy (legal) / copper (wealth). Literal classes for Tailwind JIT.
const tiles: { key: Vertical; accent: string }[] = [
  { key: 'avocat', accent: 'border-t-navy' },
  { key: 'cgp', accent: 'border-t-copper' },
]

export default function VerticalGateway({ onSelect }: { onSelect: (v: Vertical) => void }) {
  const { t } = useTranslation()
  const methodStrip = t('gateway.methodStrip', { returnObjects: true }) as string[]
  const bottomStrip = t('gateway.bottomStrip', { returnObjects: true }) as string[]

  return (
    <div className="min-h-screen flex flex-col bg-white bg-grid-paper bg-grid-44">
      {/* Top strip: wordmark + language */}
      <div className="flex items-center justify-between px-[clamp(18px,4vw,54px)] py-5">
        <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-ink">
          SYMI Intelligence
        </span>
        <LangToggle />
      </div>

      {/* Centered gateway */}
      <main className="flex-1 flex flex-col items-center justify-center px-[clamp(18px,5vw,72px)] py-[clamp(40px,7vw,96px)]">
        {/* Headline */}
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
            {t('gateway.tagline')}
          </p>
          <h1 className="mt-4 font-serif font-bold text-[clamp(26px,3.6vw,40px)] leading-[1.15] max-w-[640px]">
            <span className="block">{t('gateway.headingLine1')}</span>
            <span className="block italic">{t('gateway.headingLine2')}</span>
          </h1>
        </div>

        {/* Methodology strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 mb-10">
          {methodStrip.map((item, i) => (
            <span
              key={item}
              className={`font-mono text-[10px] uppercase tracking-[0.18em] text-ink/30 ${
                i < methodStrip.length - 1 ? "after:content-['·'] after:ml-6" : ''
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Cards */}
        <div className="w-full max-w-[980px] grid grid-cols-1 md:grid-cols-2 items-stretch gap-[clamp(16px,2vw,24px)]">
          {tiles.map(({ key, accent }) => {
            const signals = t(`gateway.${key}.signals`, { returnObjects: true }) as Signal[]
            return (
              <button
                key={key}
                type="button"
                onClick={() => onSelect(key)}
                className={`group h-full text-left flex flex-col border border-ink/12 border-t-[3px] ${accent} bg-white p-[clamp(28px,3vw,40px)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(26,29,25,0.10)] hover:border-ink/25 focus:outline-none focus-visible:border-steel`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper">
                  {t(`gateway.${key}.eyebrow`)}
                </p>
                <h2 className="mt-5 font-serif font-bold text-[clamp(28px,4vw,42px)] leading-[1.12] whitespace-pre-line">
                  {t(`gateway.${key}.headline`)}
                </h2>
                <p className="mt-5 text-[15px] text-ink-soft leading-[1.55] max-w-[420px]">
                  {t(`gateway.${key}.body`)}
                </p>

                {/* Signal preview fragment — show the artifact, don't describe it */}
                <div className="mt-5 mb-5 border border-ink/10 divide-y divide-ink/[0.08]">
                  <div className="grid grid-cols-[1fr_auto] gap-2 px-3 py-1 bg-ink/[0.03]">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-ink/35">
                      {t('heroCgp.artifactCondition')}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-ink/35">
                      {t('heroCgp.artifactSeverity')}
                    </span>
                  </div>
                  {signals.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-[1fr_auto] gap-2 items-center px-3 py-2 bg-white"
                    >
                      <span className="text-[11px] text-ink/70 leading-tight">{row.label}</span>
                      <SeverityBadge level={row.severity} />
                    </div>
                  ))}
                </div>

                {/* Archetype lineage */}
                <span className="font-mono text-[9px] text-ink/30 uppercase tracking-[0.15em]">
                  {t(`gateway.${key}.archetype`)}
                </span>

                {/* CTA */}
                <span className="mt-auto pt-8 inline-flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.1em] text-steel group-hover:text-navy transition-colors">
                  {t('gateway.cta')}
                  <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                </span>
              </button>
            )
          })}
        </div>

        {/* Bottom anchor strip */}
        <div className="mt-10 pt-6 border-t border-ink/[0.08] w-full max-w-[980px] flex flex-wrap items-center justify-center gap-2">
          {bottomStrip.map((item, i) => (
            <React.Fragment key={item}>
              {i > 0 && (
                <span className="text-ink/15 mx-2" aria-hidden="true">·</span>
              )}
              <span className="font-mono text-[10px] text-ink/25 uppercase tracking-[0.15em]">
                {item}
              </span>
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  )
}
