'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="w-full flex items-center justify-between px-8 py-6 bg-[#f4ecec]">
      <div className="flex justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="ravie logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <nav className="flex space-x-6 text-[#231f20] text-base">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="relative group"
          >
            {label}
            <span
              className={`block h-[1px] w-full bg-[#231f20] transition-transform origin-left ${
                pathname === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}
            ></span>
          </Link>
        ))}
      </nav>
    </header>
  )
}
