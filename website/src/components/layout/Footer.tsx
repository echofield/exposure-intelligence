import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="flex flex-wrap justify-between gap-4 px-[clamp(18px,4vw,54px)] py-8 border-t border-ink/10 text-[13px] text-ink-soft">
      <span className="font-bold">{t('footer.name')}</span>
      <span>{t('footer.tagline')}</span>
    </footer>
  )
}
