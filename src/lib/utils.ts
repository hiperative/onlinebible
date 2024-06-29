import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateText(text: string, size: number): string {
  if (text.length <= size) {
    return text
  }

  return text.slice(0, size - 3) + '...'
}
