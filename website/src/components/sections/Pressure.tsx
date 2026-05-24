import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Pressure() {
  const { t } = useTranslation()

  return (
    <section className="section-shell py-8 pb-[clamp(64px,8vw,96px)]" aria-label="Why now">
      <div className="grid grid-cols-1 md:grid-cols-3 border border-ink/12 divide-y md:divide-y-0 md:divide-x divide-ink/12">
        {(['p1', 'p2', 'p3'] as const).map((key) => (
          <p
            key={key}
            className="px-[clamp(22px,3vw,40px)] py-[clamp(26px,3vw,44px)] text-[clamp(17px,1.8vw,22px)] text-ink-soft leading-[1.48] bg-[rgba(250,248,241,0.7)]"
          >
            {t(`pressure.${key}`)}
          </p>
        ))}
      </div>
    </section>
  )
}
