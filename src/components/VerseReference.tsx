import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip'
import { A } from '@/components/ui/anchor'
import type { VerseWithComment } from '@/lib/bible'

export const VerseReference = ({
  comment,
}: Pick<VerseWithComment, 'comment'>) => {
  if (!comment) {
    return null
  }

  const handleRefClick = (
    evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    evt.preventDefault()
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a className="cursor-pointer" onClick={handleRefClick}>
            <em className="p-1 align-super font-serif text-xs text-primary/60 hover:text-primary">
              {comment[0]?.letter}
            </em>
          </a>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          <p className="flex gap-2">
            {comment.map((c, i) => (
              <span key={c.href}>
                <A href={c.href} title={c.text}>
                  {c.text}
                </A>
                {i === comment.length - 1 ? '.' : ';'}
              </span>
            ))}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
