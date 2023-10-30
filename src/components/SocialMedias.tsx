import { twMerge } from 'tailwind-merge'

import { socialMedias } from '@/consts'

interface SocialMediasProps {
  className?: string
}

export function SocialMedias({ className }: SocialMediasProps) {
  return (
    <>
      <h3 className={twMerge('text-lg mb-4', className)}>
        Find us on social media
      </h3>
      <div className="flex flex-wrap items-center gap-2">
        {socialMedias.map(socialMedia => (
          <a
            key={socialMedia.url}
            href={socialMedia.url}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-yellow-500 text-black hover:bg-yelllow-500 hover:text-yellow-500 transition-colors duration-300 rounded-full"
          >
            {socialMedia.icon}
          </a>
        ))}
      </div>
    </>
  )
}
