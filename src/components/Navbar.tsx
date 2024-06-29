import { ShareIcon, BookmarkIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface NavbarProps {
  path?: string
}

export const Navbar = ({ path = '/' }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/60 px-4 backdrop-blur sm:px-6">
      {/* App Logo */}
      <div className="flex items-center gap-4">
        <a href={path} className="flex items-center gap-2">
          <img
            src="/svg/novo-logo.svg"
            alt="La Biblia Online"
            className="block size-8"
          />
        </a>
      </div>
      {/* Search? */}
      {/* <div className="relative flex-1">
        <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search Bible..."
          className="w-full rounded-lg bg-background pl-8 sm:w-[300px]"
        />
      </div> */}

      {/* User Actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <ShareIcon className="h-5 w-5" />
          <span className="sr-only">Share</span>
        </Button>
        <Button variant="ghost" size="icon">
          <BookmarkIcon className="h-5 w-5" />
          <span className="sr-only">Bookmark</span>
        </Button>
      </div>
    </header>
  )
}
