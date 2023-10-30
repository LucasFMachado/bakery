import { twMerge } from 'tailwind-merge'

import { openingHours } from '@/consts'

interface OpeningHoursProps {
  className?: string
}

export function OpeningHours({ className }: OpeningHoursProps) {
  return (
    <>
      <h3 className={twMerge('text-lg mb-4', className)}>Opening hours</h3>
      <ul className="text-sm">
        {openingHours.map(openingHour => (
          <li key={openingHour.label}>
            {openingHour.label}:&ensp;
            <span className="text-gray-400">{openingHour.officeHour}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
