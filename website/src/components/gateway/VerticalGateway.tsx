import React from 'react'
import { useTranslation } from 'react-i18next'
import LangToggle from '../ui/LangToggle'

type Vertical = 'avocat' | 'cgp'

const tiles: { key: Vertical }[] = [{ key: 'avocat' }, { key: 'cgp' }]

export default function VerticalGateway({ onSelect }: { onSelect: (v: Vertical) => void }) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#ffffff' }}>
      {/* Top strip: wordmark + language */}
      <div className="flex items-center justify-between px-[clamp(18px,4vw,54px)] py-5">
        <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-ink">
          SYMI Intelligence
        </span>
        <LangToggle />
      </div>

      {/* Centered gateway */}
      <main className="flex-1 flex flex-col items-center justify-center px-[clamp(18px,5vw,72px)] py-[clamp(40px,7vw,96px)]">
        <div className="text-center mb-[clamp(36px,5vw,64px)]">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
            {t('gateway.tagline')}
          </p>
          <h1 className="mt-4 font-serif font-bold text-[clamp(26px,3.6vw,40px)] leading-[1.15] max-w-[640px]">
            {t('gateway.heading')}
          </h1>
        </div>

        <div className="w-full max-w-[980px] grid grid-cols-1 md:grid-cols-2 gap-[clamp(16px,2vw,24px)]">
          {tiles.map(({ key }) => (
            <button
              key={key}
              type="button"
              onClick={() => onSelect(key)}
              className="group text-left flex flex-col border border-ink/12 bg-white p-[clamp(28px,3vw,40px)] min-h-[clamp(280px,32vw,360px)] transition-colors duration-150 hover:bg-ink/[0.03] hover:border-steel focus:outline-none focus-visible:border-steel"
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
              <span className="mt-auto pt-8 inline-flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.1em] text-steel group-hover:text-navy transition-colors">
                {t('gateway.cta')}
                <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-1">→</span>
              </span>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
