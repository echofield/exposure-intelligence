import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LangToggle({ dark = false }: { dark?: boolean }) {
  const { i18n } = useTranslation()
  const current = i18n.language.startsWith('fr') ? 'fr' : 'en'

  const toggle = () => {
    i18n.changeLanguage(current === 'en' ? 'fr' : 'en')
  }

  const base = dark
    ? 'text-white/60 hover:text-white border-white/20 hover:border-white/50'
    : 'text-ink/50 hover:text-ink border-ink/20 hover:border-ink/50'

  return (
    <button
      onClick={toggle}
      className={`font-mono text-2xs font-medium uppercase tracking-widest px-2.5 py-1.5 border transition-colors duration-150 ${base}`}
      aria-label={current === 'en' ? 'Switch to French' : 'Passer en anglais'}
    >
      {current === 'en' ? 'FR' : 'EN'}
    </button>
  )
}
