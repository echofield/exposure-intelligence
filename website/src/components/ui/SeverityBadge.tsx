import React from 'react'

type Severity = 'Critical' | 'High' | 'Medium' | 'Low'

const config: Record<Severity, { bg: string; text: string; dot: string }> = {
  Critical: {
    bg: 'bg-critical/10 border border-critical/30',
    text: 'text-critical',
    dot: 'bg-critical',
  },
  High: {
    bg: 'bg-high/10 border border-high/30',
    text: 'text-high',
    dot: 'bg-high',
  },
  Medium: {
    bg: 'bg-medium/10 border border-medium/30',
    text: 'text-medium',
    dot: 'bg-medium',
  },
  Low: {
    bg: 'bg-low/10 border border-low/30',
    text: 'text-low',
    dot: 'bg-low',
  },
}

const normalizedSeverity: Record<string, Severity> = {
  Critical: 'Critical',
  Critique: 'Critical',
  High: 'High',
  Élevée: 'High',
  Elevee: 'High',
  Medium: 'Medium',
  Moyenne: 'Medium',
  Low: 'Low',
  Faible: 'Low',
}

export default function SeverityBadge({ level }: { level: string }) {
  const c = config[normalizedSeverity[level] ?? 'Medium']
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 font-mono text-2xs font-medium uppercase tracking-widest ${c.bg} ${c.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
      {level}
    </span>
  )
}
