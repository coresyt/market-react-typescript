import Sephora from './icons/Sephora'
import Search from './icons/Search'
import React from 'react'
import Cart from './icons/Cart'

export default function Header({
  handleCartStatus,
}: {
  handleCartStatus: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}) {
  return (
    <header className="fixed z-20 flex h-32 w-full items-center justify-center rounded-b-lg bg-zinc-800 sm:h-28">
      <div className="flex h-12 w-[95%] items-center justify-center gap-2 max-sm:h-24 max-sm:flex-col">
        <div className="flex w-full gap-5 max-sm:justify-around">
          <Sephora className="h-10 w-28 fill-white sm:w-24" />
          <button onClick={handleCartStatus}>
            <Cart className="size-7 fill-zinc-200" />
          </button>
        </div>
        <search className="size-full overflow-hidden rounded-3xl">
          <form className="flex size-full items-center justify-center bg-zinc-500">
            <input
              type="search"
              placeholder="Search any this of Sephora Shop"
              className="size-full border-none bg-transparent px-4 py-2 outline-none"
            />
            <button className="flex h-full w-12 items-center justify-center rounded-s-3xl bg-zinc-400">
              <Search className="size-5" />
            </button>
          </form>
        </search>
      </div>
    </header>
  )
}
