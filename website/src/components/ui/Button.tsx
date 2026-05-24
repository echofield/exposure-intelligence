import React from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'light'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  as?: 'button' | 'a'
  href?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-moss text-white border border-transparent hover:-translate-y-px',
  secondary:
    'bg-white/40 text-ink border border-ink/25 hover:-translate-y-px',
  ghost:
    'bg-transparent text-ink border border-ink/20 hover:border-ink/50 hover:-translate-y-px',
  light:
    'bg-white text-ink border border-white/30 hover:-translate-y-px',
}

export default function Button({
  variant = 'primary',
  as: Tag = 'button',
  href,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center min-h-[48px] px-[18px] py-[13px] text-sm font-bold transition-transform duration-150 cursor-pointer'

  if (Tag === 'a' && href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}
