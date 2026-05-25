import React from 'react'
import { useTranslation } from 'react-i18next'

type Card = {
  label: string
  title: string
  body: string
}

type ListBlock = {
  title: string
  items: string[]
}

type ProtocolMetric = {
  label: string
  value: string
}

export default function MethodTrust() {
  const { t } = useTranslation()
  const cards = t('method.cards', { returnObjects: true }) as Card[]
  const lists = t('method.lists', { returnObjects: true }) as ListBlock[]
  const protocolMetrics = t('method.protocolMetrics', { returnObjects: true }) as ProtocolMetric[]

  return (
    <section
      id="method"
      className="section-shell py-[clamp(70px,9vw,118px)]"
      aria-labelledby="method-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.86fr)_minmax(360px,1fr)] gap-[clamp(34px,5vw,70px)] items-start">
        <div className="lg:sticky lg:top-[96px]">
          <p className="text-2xs font-bold uppercase tracking-[0.14em] text-copper mb-3.5">
            {t('method.eyebrow')}
          </p>
          <h2 id="method-title" className="text-[clamp(32px,4.5vw,56px)]">
            {t('method.heading')}
          </h2>
          <p className="mt-5 text-[18px] text-ink-soft leading-[1.55]">
            {t('method.lead')}
          </p>
          <div className="mt-7 border border-ink/12 bg-white/35 p-5">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink/35 mb-2">
              {t('method.noDataLabel')}
            </p>
            <p className="text-[15px] text-ink-soft leading-[1.58]">
              {t('method.noDataBody')}
            </p>
          </div>
        </div>

        <div>
          <div className="mb-[12px] border border-ink/12 bg-ink text-paper p-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-copper">
              {t('method.protocolEyebrow')}
            </p>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_minmax(260px,1fr)] gap-5 items-start">
              <div>
                <h3 className="text-[24px] leading-[1.2] text-paper">
                  {t('method.protocolHeading')}
                </h3>
                <p className="mt-3 text-[14px] text-paper/72 leading-[1.55]">
                  {t('method.protocolBody')}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-2">
                {protocolMetrics.map((item) => (
                  <div key={item.label} className="border border-white/15 bg-white/[0.04] px-3 py-2.5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-paper/40">
                      {item.label}
                    </p>
                    <p className="mt-1 font-mono text-[12px] font-bold text-paper">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[12px]">
            {cards.map((card) => (
              <article key={card.title} className="border border-ink/12 bg-[rgba(250,248,241,0.78)] p-5 min-h-[210px]">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-copper">
                  {card.label}
                </p>
                <h3 className="mt-3 text-[20px] leading-[1.2]">{card.title}</h3>
                <p className="mt-3 text-[14px] text-ink-soft leading-[1.55]">{card.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-[12px] grid grid-cols-1 md:grid-cols-3 gap-[12px]">
            {lists.map((block) => (
              <article key={block.title} className="border border-ink/12 bg-ink text-paper p-5">
                <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-copper">
                  {block.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[13px] text-paper/72 leading-[1.45]">
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-copper flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-5 text-[14px] text-ink-soft leading-[1.55] border-l-2 border-steel/45 pl-4">
            {t('method.boundary')}
          </p>
        </div>
      </div>
    </section>
  )
}
