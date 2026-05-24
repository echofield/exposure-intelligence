import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'

export default function OriginationPilot() {
  const { t } = useTranslation()
  const signals: string[] = t('origination.signals', { returnObjects: true }) as string[]

  return (
    <section
      id="origination"
      className="section-full py-[clamp(64px,8vw,104px)] bg-[#0d1720] text-white"
      aria-labelledby="origination-title"
    >
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(320px,0.7fr)] gap-[clamp(40px,6vw,80px)] items-start">
          {/* Left */}
          <div>
            <p className="text-2xs font-bold uppercase tracking-[0.14em] text-white/35 mb-3.5">
              {t('origination.eyebrow')}
            </p>
            <h2 id="origination-title" className="text-[clamp(30px,4vw,52px)]">
              {t('origination.heading')}
            </h2>
            <p className="mt-2 text-[clamp(18px,2vw,23px)] text-white/50 font-serif italic">
              {t('origination.subhead')}
            </p>
            <p className="mt-7 text-[16px] text-white/60 leading-[1.6] max-w-[580px]">
              {t('origination.body')}
            </p>
          </div>

          {/* Right — signals + CTA */}
          <div className="border border-white/10 bg-white/[0.04] p-8">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/35 mb-5">
              {t('origination.signalLabel')}
            </p>

            <ul className="space-y-3">
              {signals.map((signal) => (
                <li key={signal} className="flex items-start gap-3 text-[15px] text-white/65 leading-[1.5]">
                  <span className="mt-[6px] w-1 h-1 rounded-full bg-white/25 flex-shrink-0" aria-hidden="true" />
                  {signal}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-[12px] text-white/35 font-mono uppercase tracking-widest mb-5">
                {t('origination.confidentialNote')}
              </p>
              <Button as="a" href="#inquiry" variant="ghost" className="border-white/20 text-white hover:border-white/50 w-full">
                {t('origination.cta')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
