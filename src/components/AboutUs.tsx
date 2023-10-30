'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MdDone } from 'react-icons/md'

interface AboutUsProps {
  short?: boolean
}

const features = ['Fresh', 'Organic', 'Lorem', 'Ipsum']

export function AboutUs({ short }: AboutUsProps) {
  const router = useRouter()

  return (
    <div className="py-16 sm:py-28">
      <div className="container mx-auto px-4 max-w-[800px]">
        <h2 className="text-4xl mb-10 text-center">Our Story</h2>
        {short ? (
          <>
            <p className="text-center text-lg font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi at
              voluptatibus quas laudantium distinctio. Doloribus soluta velit
              perspiciatis at corporis excepturi corrupti dicta dolore explicabo
              eos architecto molestias, atque tempora harum consequuntur sint
              vero temporibus voluptatem! Esse laudantium sapiente deserunt odio
              aspernatur! Consequatur recusandae fugit maxime iste qui quas!
              Accusantium!
            </p>
            <div className="flex justify-center mt-10">
              <button
                className="border border-yellow-500 py-4 px-8 uppercase tracking-[2px] text-sm hover:bg-yellow-500 hover:text-white transition-colors self-center"
                onClick={() => router.push('/about')}
              >
                Read more
              </button>
            </div>
          </>
        ) : (
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <p className="font-light mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                at voluptatibus quas laudantium distinctio. Doloribus soluta
                velit perspiciatis at corporis excepturi corrupti dicta dolore
                explicabo eos architecto molestias, atque tempora harum
                consequuntur sint vero temporibus voluptatem! Esse laudantium
                sapiente deserunt odio aspernatur! Consequatur recusandae fugit
                maxime iste qui quas! Accusantium!
              </p>
              <p className="font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                temporibus, eius dolorem beatae culpa aspernatur soluta mollitia
                voluptas totam, molestias rem tempora velit, exercitationem
                praesentium reprehenderit quaerat earum consequatur iure nihil
                sapiente inventore enim. Inventore nam vero delectus consectetur
                corrupti facilis ab cumque laborum natus, aspernatur sequi sed
                voluptatum repellat.
              </p>
              <ul className="grid grid-cols-2 gap-1 mt-6">
                {features.map(feature => (
                  <li key={feature} className="flex items-center">
                    <span className="text-yellow-500 mr-1">
                      <MdDone />
                    </span>
                    <span className="text-sm uppercase">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center sm:justify-end">
              <Image
                src="/assets/images/bread_about.jpg"
                alt="Bread"
                width={350}
                height={525}
                priority
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
