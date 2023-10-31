'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'

import { headerLinks } from '@/consts'

import { HeaderLink } from '.'

export function Header() {
  const [scrollYPosition, setScrollYPosition] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const onScrool = useCallback(() => {
    const { scrollY } = window
    setScrollYPosition(scrollY)
  }, [])

  useEffect(() => {
    onScrool()
    window.addEventListener('scroll', onScrool, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScrool)
    }
  }, [])

  return (
    <>
      <div
        className={clsx(
          'fixed top-0 left-0 w-full transition-colors duration-500 z-40',
          { 'bg-white drop-shadow-md': scrollYPosition > 50 },
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 text-yellow-500">
            <Link href="/" className="text-3xl font-bold uppercase flex gap-2">
              <Image
                src="/assets/logo.png"
                width={25}
                height={25}
                alt="Logo"
                className="object-contain flex items-center justify-center"
              />
              Bakery
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {headerLinks.map(link => (
                <HeaderLink key={link.path} name={link.name} path={link.path} />
              ))}
            </nav>
            <button
              className="text-2xl h-10 w-10 border border-transparent hover:border-yellow-500 hover:text-white flex md:hidden items-center justify-center transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'fixed z-50 top-0 w-72 h-full overflow-y-auto bg-yellow-900 transition-all duration-500 md:hidden',
          { 'right-0': mobileMenuOpen, '-right-72': !mobileMenuOpen },
        )}
      >
        <div className="text-right">
          <button
            className="text-white text-2xl p-4 inline-flex items-center hover:text-yellow-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            <MdClose />
          </button>
          <nav className="flex flex-col items-center text-white divide-y divide-yellow-800 border-b border-yellow-800">
            {headerLinks.map(link => (
              <HeaderLink
                key={link.path}
                name={link.name}
                path={link.path}
                mobile
              />
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
