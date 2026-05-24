import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'

export default function AdvisoryPartners() {
  const { t } = useTranslation()

  return (
    <section
      id="partners"
      className="section-full py-[clamp(70px,9vw,118px)] bg-slate text-white"
      style={{ background: '#1e2830' }}
      aria-labelledby="partners-title"
    >
      <div className="section-shell">
        {/* Band */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-9 border-b border-white/15">
          <div>
            <p className="text-2xs font-bold uppercase tracking-[0.14em] text-[#dcc6a8] mb-3.5">
              {t('partners.eyebrow')}
            </p>
            <h2 id="partners-title" className="text-[clamp(32px,4.5vw,56px)]">
              {t('partners.heading')}
            </h2>
            <p className="mt-4 text-[19px] text-white/75 leading-[1.45]">
              {t('partners.subhead')}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2.5 flex-shrink-0">
            <Button as="a" href="#inquiry" variant="light">
              {t('partners.cta')}
            </Button>
            <a
              href="/demo"
              className="text-[12px] font-mono text-white/40 hover:text-white/70 transition-colors underline underline-offset-2"
            >
              {t('partners.demoLink')}
            </a>
          </div>
        </div>

        {/* Copy grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-9">
          {(['p1', 'p2', 'p3'] as const).map((key) => (
            <p key={key} className="text-[16px] text-white/70 leading-[1.6]">
              {t(`partners.${key}`)}
            </p>
          ))}
        </div>

        <p className="mt-8 text-[14px] font-bold text-[#dcc6a8]">
          {t('partners.note')}
        </p>
      </div>
    </section>
  )
}
