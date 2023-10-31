'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface HeaderLinkProps {
  name: string
  path: string
  mobile?: boolean
}

export function HeaderLink({ name, path, mobile }: HeaderLinkProps) {
  const pathName = usePathname()

  if (mobile) {
    return (
      <Link
        href={path}
        className={clsx('p-4 w-full text-center hover:text-yellow-600', {
          'text-yellow-500': pathName === path,
        })}
      >
        {name}
      </Link>
    )
  }

  return (
    <Link
      href={path}
      className={twMerge(
        'relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-yellow-500 hover:after:w-full after:transition-all',
        `${pathName === path ? 'after:w-full' : ''}`,
      )}
    >
      {name}
    </Link>
  )
}
