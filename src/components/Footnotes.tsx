import type { VerseWithComment, Comment } from '@/lib/bible'

export const Footnotes = ({ verses }: { verses: VerseWithComment[] }) => {
  const footnotes = new Map<string, Comment[]>()

  verses.forEach((v) => {
    if (v.comment?.length) {
      footnotes.set(v.comment?.[0]?.letter as string, v.comment)
    }
  })

  return (
    <footer className="mt-4 border-t border-t-muted pt-4">
      {Array.from(footnotes, ([letter, comment]) => ({ letter, comment })).map(
        (i) => (
          <p
            key={i.letter}
            className="flex gap-2 font-serif text-sm leading-relaxed"
          >
            [{i.letter}]
            {i.comment.map((c, idx) => (
              <span key={c.href}>
                <a
                  href={c.href}
                  title={c.text}
                  className="text-primary/60 hover:text-primary"
                >
                  {c.text}
                </a>
                {idx === i.comment.length - 1 ? '' : ';'}
              </span>
            ))}
          </p>
        ),
      )}
    </footer>
  )
}
