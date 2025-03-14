import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/unsplash-2.jpg',
    title: 'Quran Hifdh',
    rating: 5,
    ratingCount: 8,
    price: 25,
    category: 'Beginner',
  },
  // {
  //   id: 2,
  //   cover: '/images/courses/alvaro-reyes-qWwpHwip31M-unsplash.jpg',
  //   title: 'Contemporary Age Curricullum',
  //   rating: 5,
  //   ratingCount: 15,
  //   price: 20,
  //   category: 'Intermediate',
  // },
  // {
  //   id: 3,
  //   cover: '/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg',
  //   title: 'Advanced Computer Concepts from an Early Age',
  //   rating: 4,
  //   ratingCount: 7,
  //   price: 30,
  //   category: 'Beginner',
  // },
  {
    id: 4,
    cover: '/images/prayer4.jpg',
    title: 'Daily Prayers',
    rating: 4,
    ratingCount: 12,
    price: 30,
    category: 'Intermediate',
  },
  {
    id: 5,
    cover: '/images/Jummah-bayaan2.jpg',
    title: 'Jummah Bayaan',
    rating: 4,
    ratingCount: 32,
    price: 35,
    category: 'Intermediate',
  }
]
