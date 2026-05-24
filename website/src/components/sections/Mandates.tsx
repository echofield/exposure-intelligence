import React from 'react'
import { useTranslation } from 'react-i18next'

// Artifact coverage — taken directly from the dossier section grammar
// Accurate at archetype level, no claims beyond what the artifact produces
const COVERAGE: Record<string, string[]> = {
  card1: ['Surface map', 'Exposure signals', 'Evidence gaps', 'Escalation triggers', 'Remediation pathways'],
  card2: ['Gate map', 'Dependency view', 'Evidence architecture', 'Buyer objection map', 'Remediation roadmap'],
  card3: ['Deal risk map', 'Dependency concentration', 'Evidence gaps', 'Deal-term implications', 'Post-close roadmap'],
}

const indices = ['01', '02', '03']
const cards = ['card1', 'card2', 'card3'] as const

export default function Mandates() {
  const { t } = useTranslation()

  return (
    <section
      id="mandates"
      className="section-shell py-[clamp(70px,9vw,118px)]"
      aria-labelledby="mandates-title"
    >
      <div className="max-w-[880px] mb-9">
        <p className="text-2xs font-bold uppercase tracking-[0.14em] text-copper mb-3.5">
          {t('mandates.eyebrow')}
        </p>
        <h2 id="mandates-title" className="text-[clamp(32px,4.5vw,56px)]">
          {t('mandates.heading')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
        {cards.map((card, i) => (
          <article
            key={card}
            className={`flex flex-col p-[30px] border shadow-[0_18px_50px_rgba(22,36,58,0.07)] ${
              card === 'card2'
                ? 'border-copper/35 bg-[#f7f2e7]'
                : 'border-ink/12 bg-[rgba(250,248,241,0.82)]'
            }`}
          >
            {/* Header row */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-5 border-b border-ink/10">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink/30">
                {indices[i]}
              </span>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-copper font-mono">
                {t(`mandates.${card}.label`)}
              </p>
            </div>

            {/* Artifact name — leads the card */}
            <h3 className="text-[20px] leading-[1.28] mb-4">
              {t(`mandates.${card}.artifact`)}
            </h3>

            {/* Situation */}
            <p className="text-[14px] text-ink-soft leading-[1.58]">
              {t(`mandates.${card}.situation`)}
            </p>

            {/* Coverage — structural metadata in mono */}
            <div className="mt-6 pt-5 border-t border-ink/10">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink/35 mb-2.5">
                {t('mandates.coverageLabel')}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {COVERAGE[card].map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[10px] px-2 py-0.5 border border-ink/15 text-ink/50 bg-white/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Price — entry path prominent */}
            <div className="mt-5 pt-5 border-t border-ink/10">
              <p className="font-bold text-oxblood text-[14px]">
                {t(`mandates.${card}.price`)}
              </p>
              {card === 'card1' && (
                <p className="mt-1 font-mono text-[11px] text-ink/40">
                  {t('mandates.card1PilotNote')}
                </p>
              )}
            </div>

            {/* Role */}
            <p className="mt-4 text-[13px] text-ink-soft leading-[1.55] flex-grow">
              {t(`mandates.${card}.role`)}
            </p>

            <a
              href="#inquiry"
              className="mt-6 w-fit border-b border-steel text-steel text-[13px] font-bold pb-0.5 hover:text-navy transition-colors duration-150 font-mono uppercase tracking-[0.06em]"
            >
              {t(`mandates.${card}.cta`)} →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
