import React, { useEffect, useRef } from 'react'

const COLS = 12
const ROWS = 7
const TOTAL = COLS * ROWS

// Pre-computed which cells are "evidenced" (filled) vs "gap" (pulsing empty)
// Pattern reflects the dossier concept: most cells filled, a few structural gaps
const GAP_INDICES = new Set([
  3, 14, 20, 27, 35, 41, 48, 55, 62, 70, 17, 44, 58,
])

interface Cell {
  index: number
  isGap: boolean
  delay: number
}

const cells: Cell[] = Array.from({ length: TOTAL }, (_, i) => ({
  index: i,
  isGap: GAP_INDICES.has(i),
  delay: (i % 11) * 0.22,
}))

export default function EvidenceGrid({ className = '' }: { className?: string }) {
  return (
    <div
      className={`grid gap-px ${className}`}
      style={{
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
      }}
      aria-hidden="true"
    >
      {cells.map((cell) =>
        cell.isGap ? (
          <div
            key={cell.index}
            className="animate-cell-pulse border border-ink/10"
            style={{ animationDelay: `${cell.delay}s` }}
          />
        ) : (
          <div
            key={cell.index}
            className="bg-ink/[0.07] border border-ink/10"
          />
        )
      )}
    </div>
  )
}
