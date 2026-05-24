import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'

export default function FlagshipDossiers() {
  const { t } = useTranslation()

  return (
    <section
      id="dossiers"
      className="section-full py-[clamp(70px,9vw,118px)] bg-gradient-to-b from-[#162035] to-[#1a2535] text-white"
      aria-labelledby="dossiers-title"
    >
      <div className="section-shell">
        {/* Heading */}
        <div className="max-w-[880px] mb-10">
          <p className="text-2xs font-bold uppercase tracking-[0.14em] text-white/60 mb-3.5">
            {t('dossiers.eyebrow')}
          </p>
          <h2 id="dossiers-title" className="text-[clamp(32px,4.5vw,56px)]">
            {t('dossiers.heading')}
          </h2>
          <p className="mt-4 text-[18px] text-white/65 leading-[1.5]">
            {t('dossiers.subhead')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          {/* Sovereign */}
          <article className="p-[clamp(28px,4vw,46px)] border border-ink/15 bg-[#fbfaf6] text-ink shadow-[0_18px_50px_rgba(32,35,31,0.15)]">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-copper">
              {t('dossiers.sovereign.meta')}
            </p>
            <h3 className="mt-3 text-[clamp(22px,2.5vw,32px)]">
              {t('dossiers.sovereign.title')}
            </h3>
            <p className="mt-4 font-serif text-[20px] leading-[1.42] text-ink">
              {t('dossiers.sovereign.lead')}
            </p>
            <p className="mt-4 text-[15px] text-ink-soft leading-[1.55]">{t('dossiers.sovereign.body1')}</p>
            <p className="mt-3 text-[15px] text-ink-soft leading-[1.55]">{t('dossiers.sovereign.body2')}</p>
            <p className="mt-3 text-[15px] text-ink-soft leading-[1.55]">{t('dossiers.sovereign.body3')}</p>
            <p className="mt-5 font-bold text-oxblood text-[14px]">{t('dossiers.sovereign.price')}</p>
            <Button as="a" href="#inquiry" variant="secondary" className="mt-6">
              {t('dossiers.sovereign.cta')}
            </Button>
          </article>

          {/* PE */}
          <article className="p-[clamp(28px,4vw,46px)] border border-white/10 bg-[#141e2e] text-white shadow-[0_18px_50px_rgba(12,20,36,0.35)]">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#dcc6a8]">
              {t('dossiers.pe.meta')}
            </p>
            <h3 className="mt-3 text-[clamp(22px,2.5vw,32px)]">
              {t('dossiers.pe.title')}
            </h3>
            <p className="mt-4 font-serif text-[20px] leading-[1.42] text-paper/90">
              {t('dossiers.pe.lead')}
            </p>
            <p className="mt-4 text-[15px] text-white/65 leading-[1.55]">{t('dossiers.pe.body1')}</p>
            <p className="mt-3 text-[15px] text-white/65 leading-[1.55]">{t('dossiers.pe.body2')}</p>
            <p className="mt-3 text-[15px] text-white/65 leading-[1.55]">{t('dossiers.pe.body3')}</p>
            <p className="mt-5 font-bold text-[#dcc6a8] text-[14px]">{t('dossiers.pe.price')}</p>
            <Button as="a" href="#inquiry" variant="light" className="mt-6">
              {t('dossiers.pe.cta')}
            </Button>
          </article>
        </div>

        {/* Preview rail */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mt-5">
          {[
            { labelKey: 'dossiers.rail.sample', titleKey: 'dossiers.rail.item1Title', bodyKey: 'dossiers.rail.item1Body' },
            { labelKey: 'dossiers.rail.flagship', titleKey: 'dossiers.rail.item2Title', bodyKey: 'dossiers.rail.item2Body' },
            { labelKey: 'dossiers.rail.flagship', titleKey: 'dossiers.rail.item3Title', bodyKey: 'dossiers.rail.item3Body' },
          ].map((item) => (
            <article
              key={item.titleKey}
              className="min-h-[150px] p-[22px] border border-white/15 bg-white/7"
            >
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#dcc6a8]">
                {t(item.labelKey)}
              </span>
              <h4 className="mt-3.5 text-[18px] text-white font-serif">{t(item.titleKey)}</h4>
              <p className="mt-3 text-[13px] text-white/65 leading-[1.5]">{t(item.bodyKey)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
