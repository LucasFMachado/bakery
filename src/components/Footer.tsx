import Link from 'next/link'

import { OpeningHours, SocialMedias } from '.'

export function Footer() {
  return (
    <div className="border-t-8 border-yellow-500 py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-10 mb-8">
          <div>
            <p className="text-3xl font-bold uppercase mb-4">Bakery</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              dignissimos id, molestiae vero distinctio nam et dolorem veniam
              dolores ratione inventore cumque dolor eum sequi eveniet debitis,
              nulla aut blanditiis.
            </p>
          </div>
          <div>
            <OpeningHours />
          </div>
          <div>
            <SocialMedias />
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-wrap items-center justify-center text-sm gap-4">
          <p>&copy; Copyright {new Date().getFullYear()}</p>
          <Link
            href="/terms"
            className="text-gray-400 underline hover:no-underline"
          >
            Terms &amp; Conditions
          </Link>
          <Link
            href="/privacy-policy"
            className="text-gray-400 underline hover:no-underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
