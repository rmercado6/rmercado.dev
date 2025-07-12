import { TimelineItem } from '../../../types/timeline'

const items = [
  {
    title: 'Software Developer Level 2',
    description: 'Podfather',
    date: {
      start: { day: 11, month: 11, year: 2024 },
      end: null
    },
    img: {
      description: 'Podfather Logo',
      src: './podfather_logo.jpeg'
    }
  },
  {
    title: 'Senior Software Developer',
    description: 'Accenture Mexico',
    date: {
      start: { day: 31, month: 10, year: 2022 },
      end: { day: 1, month: 9, year: 2023 }
    },
    img: {
      description: 'Accenture Logo',
      src: '/accenture.png',
      class: 'bg-white'
    }
  },
  {
    title: 'Data Scientist',
    description: 'Axtel',
    date: {
      start: { day: 6, month: 9, year: 2021 },
      end: { day: 28, month: 10, year: 2022 }
    },
    img: {
      description: 'Axtel Logo',
      src: '/axtel.png'
    }
  },
  {
    title: 'Desarrollador Web Full Stack',
    description:
      'Corporación en Investigación Tecnológica e Informática (CITI)',
    date: {
      start: { day: 1, month: 1, year: 2019 },
      end: { day: 1, month: 1, year: 2021 }
    },
    img: {
      description: 'CITI Logo',
      src: '/citi.webp',
      class: 'bg-white'
    }
  }
]

export const professionalTimelineItems: TimelineItem[] = [
  ...items.map((x) => ({ ...x, category: 'professional' }))
]
