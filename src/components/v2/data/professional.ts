import { TimelineItem } from '../../../types/timeline'

export const professionalTimelineItems: TimelineItem[] = [
  new TimelineItem(
    'Software Developer Level 2',
    'Podfather',
    {
      start: { day: 11, month: 11, year: 2024 },
      end: null
    },
    'professional',
    {
      description: 'Podfather Logo',
      src: './podfather_logo.jpeg'
    }
  ),
  new TimelineItem(
    'Senior Software Developer',
    'Accenture Mexico',
    {
      start: { day: 31, month: 10, year: 2022 },
      end: { day: 1, month: 9, year: 2023 }
    },
    'professional',
    {
      description: 'Accenture Logo',
      src: '/accenture.png',
      class: 'bg-white'
    }
  ),
  new TimelineItem(
    'Data Scientist',
    'Axtel',
    {
      start: { day: 6, month: 9, year: 2021 },
      end: { day: 28, month: 10, year: 2022 }
    },
    'professional',
    {
      description: 'Axtel Logo',
      src: '/axtel.png'
    }
  ),
  new TimelineItem(
    'Desarrollador Web Full Stack',
    'Corporación en Investigación Tecnológica e Informática (CITI)',
    {
      start: { day: 1, month: 1, year: 2019 },
      end: { day: 1, month: 1, year: 2021 }
    },
    'professional',
    {
      description: 'CITI Logo',
      src: '/citi.webp',
      class: 'bg-white'
    }
  )
]
