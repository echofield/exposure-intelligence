import React from 'react'
import { useTranslation } from 'react-i18next'

const cases = ['case1', 'case2', 'case3'] as const

export default function UseCases() {
  const { t } = useTranslation()

  return (
    <section
      className="section-shell py-[clamp(70px,9vw,118px)]"
      aria-labelledby="use-cases-title"
    >
      <div className="max-w-[880px] mb-9">
        <p className="text-2xs font-bold uppercase tracking-[0.14em] text-copper mb-3.5">
          {t('useCases.eyebrow')}
        </p>
        <h2 id="use-cases-title" className="text-[clamp(32px,4.5vw,56px)]">
          {t('useCases.heading')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
        {cases.map((key) => (
          <article
            key={key}
            className="p-7 border border-ink/12 bg-[rgba(250,248,241,0.78)] shadow-[0_18px_50px_rgba(32,35,31,0.07)]"
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-copper">
              {t(`useCases.${key}.context`)}
            </p>
            <h3 className="mt-3 text-[25px]">{t(`useCases.${key}.title`)}</h3>
            <p className="mt-4 text-[15px] text-ink-soft leading-[1.55]">
              {t(`useCases.${key}.situation`)}
            </p>
            <dl className="mt-7 space-y-0">
              <dt className="text-[14px] font-bold text-ink mt-5 first:mt-0">
                {t(`useCases.${key}.producesLabel`)}
              </dt>
              <dd className="mt-2 text-[14px] text-ink-soft leading-[1.55]">
                {t(`useCases.${key}.produces`)}
              </dd>
              <dt className="text-[14px] font-bold text-ink mt-5">
                {t(`useCases.${key}.partnerLabel`)}
              </dt>
              <dd className="mt-2 text-[14px] text-ink-soft leading-[1.55]">
                {t(`useCases.${key}.partner`)}
              </dd>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}
