import React from 'react'

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="font-semibold text-ink">{part.slice(2, -2)}</strong>
      : part
  )
}

export default function MarkdownView({ markdown }: { markdown: string }) {
  const lines = markdown.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="font-serif text-[24px] font-bold mt-2 mb-4 text-ink leading-tight">
          {renderInline(line.slice(2))}
        </h1>
      )
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-serif text-[16px] font-bold mt-8 mb-2 pt-5 border-t border-ink/10 text-ink">
          {renderInline(line.slice(3))}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="font-serif text-[14px] font-bold mt-4 mb-1.5 text-ink">
          {renderInline(line.slice(4))}
        </h3>
      )
    } else if (line.startsWith('#### ')) {
      elements.push(
        <h4 key={i} className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] mt-3 mb-1 text-copper">
          {line.slice(5)}
        </h4>
      )
    } else if (line === '---') {
      elements.push(<hr key={i} className="border-ink/10 my-5" />)
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="border-l-2 border-steel/40 pl-3 text-ink/55 text-[11px] italic my-1 font-mono">
          {renderInline(line.slice(2))}
        </blockquote>
      )
    } else if (line.startsWith('| ') && !line.startsWith('|---') && !line.startsWith('| ---')) {
      // Table — collect all consecutive table lines
      const tableLines: string[] = []
      while (i < lines.length && lines[i].startsWith('|')) {
        if (!lines[i].replace(/\s/g, '').match(/^\|[-:]+\|/)) {
          tableLines.push(lines[i])
        }
        i++
      }
      const [headerLine, ...bodyLines] = tableLines
      if (headerLine) {
        const headers = headerLine.split('|').filter(s => s.trim())
        elements.push(
          <div key={`tbl-${i}`} className="my-4 overflow-x-auto border border-ink/10">
            <table className="w-full text-[11px] font-mono border-collapse">
              <thead>
                <tr className="bg-ink/5">
                  {headers.map((h, j) => (
                    <th key={j} className="px-3 py-2 text-left font-bold text-ink/60 border-b border-ink/12 whitespace-nowrap">
                      {h.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyLines.map((row, r) => {
                  const cells = row.split('|').filter(s => s.trim())
                  return (
                    <tr key={r} className={`border-b border-ink/8 ${r % 2 === 0 ? 'bg-white/30' : ''}`}>
                      {cells.map((cell, c) => (
                        <td key={c} className="px-3 py-1.5 text-ink/65 align-top">
                          {renderInline(cell.trim())}
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )
      }
      continue
    } else if (line.startsWith('- [ ] ') || line.startsWith('- [x] ')) {
      const checked = line.startsWith('- [x] ')
      elements.push(
        <div key={i} className="flex gap-2.5 text-[12px] text-ink-soft my-1 pl-1">
          <span className={`mt-0.5 flex-shrink-0 w-3.5 h-3.5 border ${checked ? 'border-steel bg-steel/15' : 'border-ink/30'} flex items-center justify-center`}>
            {checked && <span className="text-steel text-[8px] font-bold">✓</span>}
          </span>
          <span className="leading-[1.6]">{renderInline(line.slice(6))}</span>
        </div>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <div key={i} className="flex gap-2 text-[12px] text-ink-soft my-0.5 pl-1">
          <span className="text-steel mt-1 flex-shrink-0 text-[8px]">◆</span>
          <span className="leading-[1.6]">{renderInline(line.slice(2))}</span>
        </div>
      )
    } else if (/^\d+\. /.test(line)) {
      elements.push(
        <div key={i} className="text-[12px] text-ink-soft my-0.5 pl-4 leading-[1.6]">
          {renderInline(line)}
        </div>
      )
    } else if (line === '') {
      elements.push(<div key={i} className="h-1.5" />)
    } else {
      elements.push(
        <p key={i} className="text-[13px] text-ink-soft my-0.5 leading-[1.6]">
          {renderInline(line)}
        </p>
      )
    }

    i++
  }

  return <div className="max-w-[820px]">{elements}</div>
}
