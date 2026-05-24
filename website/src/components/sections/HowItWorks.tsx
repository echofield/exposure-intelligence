import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HowItWorks() {
  const { t } = useTranslation()

  return (
    <section
      id="model"
      className="section-shell py-[clamp(70px,9vw,118px)]"
      aria-labelledby="model-title"
    >
      <div className="max-w-[720px] mb-9">
        <p className="text-2xs font-bold uppercase tracking-[0.14em] text-copper mb-3.5">
          {t('model.eyebrow')}
        </p>
        <h2 id="model-title" className="text-[clamp(32px,4.5vw,56px)]">
          {t('model.heading')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
        {/* Artifact card */}
        <article className="min-h-[300px] p-[clamp(28px,4vw,46px)] border border-ink/12 bg-[rgba(250,248,241,0.7)] shadow-[0_18px_50px_rgba(32,35,31,0.07)]">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-copper mb-4">
            {t('model.artifactLabel')}
          </p>
          <p className="text-[18px] text-ink-soft leading-[1.55]">
            {t('model.artifactBody')}
          </p>
        </article>

        {/* Partner card */}
        <article className="min-h-[300px] p-[clamp(28px,4vw,46px)] border border-navy/40 bg-navy text-white shadow-[0_18px_50px_rgba(22,36,58,0.18)]">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#a8bfc8] mb-4">
            {t('model.partnerLabel')}
          </p>
          <p className="text-[18px] text-white/70 leading-[1.55]">
            {t('model.partnerBody')}
          </p>
        </article>
      </div>

      {/* Doctrine line */}
      <div className="mt-[18px] px-[clamp(22px,3vw,32px)] py-[clamp(20px,2.5vw,30px)] border border-ink/25 bg-ink text-paper font-serif text-[clamp(24px,3.5vw,44px)] leading-[1.2]">
        {t('model.doctrine')}
      </div>
    </section>
  )
}
