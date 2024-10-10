import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-5 ring-zinc-700">
          <Search className="h-5 w-5" />
          <input
            placeholder="Buscar Produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="h-4 w-px bg-zinc-700"></div>

        <Link href="/home" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/paulorfsantos17.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}
