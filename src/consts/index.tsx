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

export interface IProduct {
  src: string
  alt: string
  title: string
  category: string
}

export const overviewPoducts: IProduct[] = [
  {
    src: '/assets/images/baguette.jpg',
    alt: 'Baguette',
    title: 'Baguette',
    category: 'Bread',
  },
  {
    src: '/assets/images/croissants.jpg',
    alt: 'Croissant',
    title: 'Croissant',
    category: 'Pastry',
  },
  {
    src: '/assets/images/cookies.jpg',
    alt: 'Cookie',
    title: 'Cookie',
    category: 'Snacks',
  },
]

export const allProducts: IProduct[] = [
  {
    src: '/assets/images/baguette.jpg',
    alt: 'Baguette',
    title: 'Baguette',
    category: 'Bread',
  },
  {
    src: '/assets/images/croissants.jpg',
    alt: 'Croissant',
    title: 'Croissant',
    category: 'Pastry',
  },
  {
    src: '/assets/images/cookies.jpg',
    alt: 'Cookie',
    title: 'Cookie',
    category: 'Snacks',
  },
  {
    src: '/assets/images/bread_2.jpg',
    alt: 'Challah',
    title: 'Challah',
    category: 'Bread',
  },
  {
    src: '/assets/images/bread_3.jpg',
    alt: 'Sourdough',
    title: 'Sourdough',
    category: 'Bread',
  },
  {
    src: '/assets/images/bread_4.jpg',
    alt: 'Seed Bread',
    title: 'Seed Bread',
    category: 'Bread',
  },
  {
    src: '/assets/images/bread_5.jpg',
    alt: 'Bagel',
    title: 'Bagel',
    category: 'Bread',
  },
]
