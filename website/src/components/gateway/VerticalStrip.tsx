import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LangToggle from '../ui/LangToggle'
import Button from '../ui/Button'

type Vertical = 'avocat' | 'cgp'

const tabs: Vertical[] = ['avocat', 'cgp']

const navLinks: Record<Vertical, { key: string; href: string }[]> = {
  avocat: [
    { key: 'nav.howItWorks', href: '#model' },
    { key: 'nav.method', href: '#method' },
    { key: 'nav.mandates', href: '#mandates' },
    { key: 'nav.dossiers', href: '#dossiers' },
    { key: 'nav.forPartners', href: '#partners' },
  ],
  cgp: [
    { key: 'nav.howItWorks', href: '#model' },
    { key: 'nav.method', href: '#method' },
  ],
}

export default function VerticalStrip({
  active,
  onSwitch,
}: {
  active: Vertical
  onSwitch: (v: Vertical) => void
}) {
  const { t } = useTranslation()
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const handler = () => setElevated(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const switchTo = (v: Vertical) => {
    onSwitch(v)
    window.scrollTo({ top: 0 })
  }

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between gap-6 px-[clamp(18px,4vw,54px)] py-4 border-b transition-shadow duration-200 ${
        elevated
          ? 'border-ink/10 bg-paper/90 backdrop-blur-lg shadow-sm'
          : 'border-transparent bg-paper/80 backdrop-blur-md'
      }`}
    >
      {/* Brand */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0 })}
        className="flex items-center gap-3 min-w-max"
        aria-label="SYMI Intelligence"
      >
        <span className="w-9 h-9 grid place-items-center bg-ink text-paper font-serif text-[13px] border border-ink/30 flex-shrink-0">
          SI
        </span>
        <span className="text-[13px] font-bold uppercase tracking-[0.08em] hidden sm:block">
          SYMI Intelligence
        </span>
      </button>

      {/* Vertical tabs */}
      <nav className="flex items-center gap-1.5 sm:gap-3" aria-label="Verticals">
        {tabs.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => switchTo(v)}
            aria-current={active === v ? 'page' : undefined}
            className={`text-[13px] font-bold pb-1 border-b-2 transition-colors duration-150 px-1 ${
              active === v
                ? 'border-steel text-ink'
                : 'border-transparent text-ink/40 hover:text-ink/70'
            }`}
          >
            {t(`verticalStrip.${v}`)}
          </button>
        ))}
      </nav>

      {/* Section links + actions */}
      <div className="flex items-center gap-4 min-w-max">
        <nav className="hidden xl:flex items-center gap-5" aria-label="Section navigation">
          {navLinks[active].map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-[13px] font-semibold pb-0.5 border-b border-transparent text-ink-soft hover:text-ink hover:border-copper transition-colors duration-150"
            >
              {t(key)}
            </a>
          ))}
        </nav>
        <LangToggle />
        <Button as="a" href="#inquiry" variant="primary" className="text-[13px] min-h-[38px] py-2 px-3.5">
          {t('nav.partnerInquiry')}
        </Button>
      </div>
    </header>
  )
}
