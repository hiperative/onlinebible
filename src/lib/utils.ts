import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateText(text: string, size: number): string {
  if (text.length <= size) {
    return text
  }

  return text.slice(0, size) + '...'
}

export function makeBibleLink(path: string): string {
  const [book, chapter, verse] = path
    .split('?')[0]
    .replace('/RV1960', '')
    .split('/')
    .filter(Boolean)

  if (verse) {
    const search = new URLSearchParams({ verse })
    return `/${book}/${chapter}?${search}`
  }

  return `/${book}/${chapter}`
}

export function extractVerse(path: string): number[] {
  const verseQuery = new URLSearchParams(path.split('?')[1]).get('verse')

  if (!verseQuery) {
    return []
  }

  const verses = verseQuery.split('-').filter((v) => !isNaN(parseInt(v)))

  if (verses.length === 1) {
    return [parseInt(verses[0])]
  }

  const startVerse = parseInt(verses[0])
  const endVerse = parseInt(verses[1])

  if (isNaN(startVerse) || isNaN(endVerse)) {
    return []
  }

  const result = []
  for (let i = startVerse; i <= endVerse; i++) {
    result.push(i)
  }

  return result
}
