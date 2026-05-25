import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LangToggle from '../ui/LangToggle'
import Button from '../ui/Button'

const NAV_LINKS = [
  { key: 'nav.howItWorks', href: '#model' },
  { key: 'nav.method', href: '#method' },
  { key: 'nav.mandates', href: '#mandates' },
  { key: 'nav.dossiers', href: '#dossiers' },
  { key: 'nav.forPartners', href: '#partners' },
  { key: 'nav.originationPilot', href: '#origination', accent: true },
]

export default function Header() {
  const { t } = useTranslation()
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const handler = () => setElevated(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`sticky top-0 z-30 flex items-center justify-between gap-6 px-[clamp(18px,4vw,54px)] py-4 border-b transition-shadow duration-200 ${
        elevated
          ? 'border-ink/10 bg-paper/90 backdrop-blur-lg shadow-sm'
          : 'border-transparent bg-paper/80 backdrop-blur-md'
      }`}
    >
      {/* Brand */}
      <a href="#top" className="flex items-center gap-3 min-w-max" aria-label="Exposure Intelligence home">
        <span className="w-9 h-9 grid place-items-center bg-ink text-paper font-serif text-[13px] border border-ink/30 flex-shrink-0">
          EI
        </span>
        <span className="text-[13px] font-bold uppercase tracking-[0.08em] hidden sm:block">
          Exposure Intelligence
        </span>
      </a>

      {/* Nav */}
      <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Primary navigation">
        {NAV_LINKS.map(({ key, href, accent }) => (
          <a
            key={key}
            href={href}
            className={`text-[13px] font-semibold pb-0.5 border-b border-transparent hover:border-copper transition-colors duration-150 flex items-center gap-1.5 ${
              accent ? 'text-ink' : 'text-ink-soft hover:text-ink'
            }`}
          >
            {t(key)}
            {accent && (
              <span className="w-1.5 h-1.5 rounded-full bg-copper inline-block flex-shrink-0" aria-hidden="true" />
            )}
          </a>
        ))}
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-3 min-w-max">
        <LangToggle />
        <Button as="a" href="#inquiry" variant="primary" className="text-[13px] min-h-[38px] py-2 px-3.5">
          {t('nav.partnerInquiry')}
        </Button>
      </div>
    </header>
  )
}
