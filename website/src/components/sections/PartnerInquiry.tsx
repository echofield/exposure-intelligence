import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'

type FormState = {
  context: string
  jurisdiction: string
  client: string
}

export default function PartnerInquiry() {
  const { t } = useTranslation()
  const [form, setForm] = useState<FormState>({ context: '', jurisdiction: '', client: '' })
  const [status, setStatus] = useState('')

  const handleRadio = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.context || !form.jurisdiction || !form.client) {
      setStatus(t('inquiry.validationError'))
      return
    }
    const subject = encodeURIComponent('Exposure Intelligence partner inquiry')
    const body = encodeURIComponent(
      [
        'Partner inquiry',
        '',
        `Client context: ${form.context}`,
        `Primary jurisdiction: ${form.jurisdiction}`,
        `First client in mind: ${form.client}`,
      ].join('\n')
    )
    setStatus(t('inquiry.successMessage'))
    window.location.href = `mailto:partners@exposure-intelligence.com?subject=${subject}&body=${body}`
  }

  const radioClass = (selected: boolean) =>
    `flex items-start gap-2.5 mt-2.5 p-3.5 border cursor-pointer text-[14px] transition-colors duration-100 ${
      selected
        ? 'border-steel bg-steel/8 text-ink'
        : 'border-ink/12 bg-white/35 text-ink-soft hover:border-ink/25'
    }`

  return (
    <section
      id="inquiry"
      className="section-shell py-[clamp(70px,9vw,118px)] grid grid-cols-1 lg:grid-cols-[minmax(280px,0.76fr)_minmax(360px,1fr)] gap-[18px] items-start"
      aria-labelledby="sample-title"
    >
      {/* Sample panel */}
      <div className="lg:sticky lg:top-[92px] p-[clamp(28px,4vw,44px)] border border-ink/12 bg-ink text-paper shadow-[0_18px_50px_rgba(32,35,31,0.1)]">
        <p className="text-2xs font-bold uppercase tracking-[0.14em] text-copper mb-3.5">
          {t('inquiry.sampleEyebrow')}
        </p>
        <h2 id="sample-title" className="text-[clamp(28px,3.5vw,44px)]">
          {t('inquiry.sampleHeading')}
        </h2>
        <p className="mt-4 text-[17px] text-paper/70 leading-[1.55]">
          {t('inquiry.sampleBody')}
        </p>
        <Button as="a" href="/sample" variant="primary" className="mt-7">
          {t('inquiry.sampleCta')}
        </Button>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="p-[clamp(26px,4vw,42px)] border border-ink/12 bg-[rgba(250,248,241,0.86)] shadow-[0_18px_50px_rgba(32,35,31,0.07)]"
        noValidate
      >
        <p className="text-2xs font-bold uppercase tracking-[0.14em] text-copper mb-3">
          {t('inquiry.formEyebrow')}
        </p>
        <h2 className="text-[clamp(26px,3vw,38px)]">{t('inquiry.formHeading')}</h2>
        <p className="mt-3 text-[15px] text-ink-soft leading-[1.5]">{t('inquiry.formSubhead')}</p>

        {/* Q1 */}
        <fieldset className="mt-7 border-0 p-0">
          <legend className="font-serif text-[19px] font-bold text-ink mb-1">
            {t('inquiry.q1legend')}
          </legend>
          {(['q1a', 'q1b', 'q1c'] as const).map((key) => {
            const val = t(`inquiry.${key}`)
            return (
              <label key={key} className={radioClass(form.context === val)}>
                <input
                  type="radio"
                  name="context"
                  value={val}
                  checked={form.context === val}
                  onChange={handleRadio('context')}
                  className="mt-0.5 w-4 h-4 accent-navy flex-shrink-0"
                />
                <span>{val}</span>
              </label>
            )
          })}
        </fieldset>

        {/* Q2 */}
        <fieldset className="mt-7 border-0 p-0">
          <legend className="font-serif text-[19px] font-bold text-ink mb-1">
            {t('inquiry.q2legend')}
          </legend>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-2.5">
            {(['q2a', 'q2b', 'q2c', 'q2d', 'q2e'] as const).map((key) => {
              const val = t(`inquiry.${key}`)
              return (
                <label key={key} className={radioClass(form.jurisdiction === val)}>
                  <input
                    type="radio"
                    name="jurisdiction"
                    value={val}
                    checked={form.jurisdiction === val}
                    onChange={handleRadio('jurisdiction')}
                    className="mt-0.5 w-4 h-4 accent-navy flex-shrink-0"
                  />
                  <span>{val}</span>
                </label>
              )
            })}
          </div>
        </fieldset>

        {/* Q3 */}
        <fieldset className="mt-7 border-0 p-0">
          <legend className="font-serif text-[19px] font-bold text-ink mb-1">
            {t('inquiry.q3legend')}
          </legend>
          {(['q3a', 'q3b'] as const).map((key) => {
            const val = t(`inquiry.${key}`)
            return (
              <label key={key} className={radioClass(form.client === val)}>
                <input
                  type="radio"
                  name="client"
                  value={val}
                  checked={form.client === val}
                  onChange={handleRadio('client')}
                  className="mt-0.5 w-4 h-4 accent-navy flex-shrink-0"
                />
                <span>{val}</span>
              </label>
            )
          })}
        </fieldset>

        <Button type="submit" variant="primary" className="w-full mt-8">
          {t('inquiry.submit')}
        </Button>
        <p className="mt-3.5 text-[13px] text-ink-soft text-center">
          {t('inquiry.commitment')}
        </p>
        {status && (
          <p className="mt-3 text-[13px] font-bold text-center text-steel" role="status" aria-live="polite">
            {status}
          </p>
        )}
      </form>
    </section>
  )
}
