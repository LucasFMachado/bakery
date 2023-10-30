import { ReactNode } from 'react'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'

interface ISocialMedia {
  url: string
  icon: ReactNode
}

export const socialMedias: ISocialMedia[] = [
  { url: 'https://instagram.com', icon: <BsInstagram /> },
  { url: 'https://facebook.com', icon: <BsFacebook /> },
  { url: 'https://youtube.com', icon: <BsYoutube /> },
]

interface IOpeningHour {
  label: string
  officeHour: string
}

export const openingHours: IOpeningHour[] = [
  {
    label: 'Mon - Fri',
    officeHour: '6am - 10pm',
  },
  {
    label: 'Sat',
    officeHour: '6am - 6pm',
  },
  {
    label: 'Sun',
    officeHour: '6am - 10am',
  },
]