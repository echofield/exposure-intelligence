import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'
import SeverityBadge from '../ui/SeverityBadge'


type Signal = { label: string; severity: string }
type Gap = { item: string; status: string }
type ProtocolMeta = { label: string; value: string }

export default function Hero() {
  const { t } = useTranslation()
  const signals = t('hero.signals', { returnObjects: true }) as Signal[]
  const gaps = t('hero.gaps', { returnObjects: true }) as Gap[]
  const protocolMeta = t('hero.protocolMeta', { returnObjects: true }) as ProtocolMeta[]

  return (
    <section
      id="top"
      className="section-shell grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.75fr)] gap-[clamp(40px,6vw,88px)] items-center min-h-[calc(100vh-68px)] pt-[clamp(64px,8vw,108px)] pb-[clamp(44px,6vw,78px)]"
      aria-labelledby="hero-title"
    >
      {/* Copy */}
      <div className="relative z-20 max-w-[720px]">
        <p className="text-2xs font-bold uppercase tracking-[0.14em] text-copper mb-3.5">
          {t('hero.eyebrow')}
        </p>

        <h1
          id="hero-title"
          className="text-[clamp(46px,7vw,90px)] font-serif font-bold leading-[1.08] max-w-[860px]"
        >
          {t('hero.headline')}
        </h1>

        <p className="mt-6 text-[clamp(18px,2vw,23px)] text-ink-soft max-w-[640px] leading-[1.5]">
          {t('hero.subhead')}
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <Button as="a" href="/sample" variant="primary">
            {t('hero.ctaPrimary')}
          </Button>
          <Button as="a" href="#inquiry" variant="secondary">
            {t('hero.ctaSecondary')}
          </Button>
        </div>

        <p className="mt-5 text-[13px] text-ink/50">
          {t('hero.support')}
        </p>
      </div>

      {/* Dossier artifact preview */}
      <div className="relative z-0 min-h-[520px] hidden lg:block" aria-label="Dossier preview">
        {/* Back leaf */}
        <div
          className="absolute right-0 top-7 w-[min(100%,390px)] min-h-[500px] border border-ink/15 bg-[#d0c8b8] rotate-[3deg]"
          aria-hidden="true"
        />

        {/* Front leaf */}
        <div className="absolute right-[18px] top-0 z-10 w-[min(100%,390px)] min-h-[500px] border border-ink/25 bg-gradient-to-b from-[#fffdf6] to-[#ede6d9] shadow-[0_24px_70px_rgba(28,31,27,0.13)] p-9">
          {/* Kicker */}
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.13em] text-copper">
            {t('hero.dossierKicker')}
          </p>

          {/* Section heading */}
          <h2 className="mt-4 font-serif text-[28px] leading-[1.2]">
            {t('hero.dossierTitle')}
          </h2>

          <div className="mt-5 grid grid-cols-3 gap-px border border-ink/12 bg-ink/10">
            {protocolMeta.map((item) => (
              <div key={item.label} className="bg-white/55 px-2.5 py-2">
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-ink/35">
                  {item.label}
                </p>
                <p className="mt-1 font-mono text-[10px] font-bold text-ink/75">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="h-px bg-ink/18 my-7" />

          {/* Exposure signals table */}
          <div className="border border-ink/12 divide-y divide-ink/10">
            <div className="grid grid-cols-[1fr_auto] gap-3 px-3 py-1.5 bg-ink/5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">{t('hero.artifactCondition')}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">{t('hero.artifactSeverity')}</span>
            </div>
            {signals.map((s) => (
              <div key={s.label} className="grid grid-cols-[1fr_auto] gap-3 items-center px-3 py-2.5 bg-white/50">
                <span className="text-[12px] text-ink/80 leading-tight">{s.label}</span>
                <SeverityBadge level={s.severity} />
              </div>
            ))}
          </div>

          {/* Evidence gaps */}
          <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-2">
            {t('hero.artifactEvidenceGaps')}
          </p>
          <div className="border border-ink/12 divide-y divide-ink/10">
            {gaps.map((g) => (
              <div key={g.item} className="grid grid-cols-[1fr_auto] gap-2 items-center px-3 py-2 bg-white/50">
                <span className="text-[12px] text-ink/70">{g.item}</span>
                <span className="font-mono text-[10px] text-ink/40 whitespace-nowrap">{g.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
