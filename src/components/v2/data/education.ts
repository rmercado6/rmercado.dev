import { TimelineItem } from '../../../types/timeline'

export const educationTimelineItems: TimelineItem[] = [
  new TimelineItem(
    'Medium Level Technical Career in Music',
    `
    Universidad Autónoma de Nuevo León
    -
    Facultad de Música
    <br />
    Coursed as Instrumentalist in Cello
    `,
    {
      start: { day: 1, month: 1, year: 2020 },
      end: { day: 1, month: 1, year: 2022 }
    },
    'studies',
    {
      description: 'UANL logo',
      src: '/uanl-logo.png'
    }
  ),
  new TimelineItem(
    'MSc Advanced Technologies For Financial Computing',
    `
    University of Edinburgh
    -
    School of informatics
    <br />
    Dissertation: 
    <i>Automated Financial Document Summarization using GPT</i>
    `,
    {
      start: { day: 11, month: 9, year: 2023 },
      end: { day: 21, month: 11, year: 2024 }
    },
    'studies',
    {
      description: 'university of edinburgh logo',
      src: '/university-of-edinburgh-logo.png',
      class: 'bg-white'
    }
  ),
  new TimelineItem(
    'BSc Software Engineering',
    `
    Universidad Autónoma de Nuevo León
    -
    Facultad de Ingeniería Mecánica y Eléctrica
    <br />
    Tésis: 
    <i>
      <a href="https://sireac.rmercado.dev" target="_blank" class="underline">
        Sistema de recomendación de acordes basado en sentimientos
      </a>
    </i>
    `,
    {
      start: { day: 1, month: 8, year: 2015 },
      end: { day: 31, month: 5, year: 2020 }
    },
    'studies',
    {
      description: 'UANL logo',
      src: '/uanl-logo.png'
    }
  ),
  new TimelineItem(
    'International Baccalaureate Organization Diploma Programme',
    `
    Universidad de Monterrey
    - 
    Prepa Udem Unidad San Pedro
    <br />
    Extended Essay (Film):
    <i>Slow cinema in Carlos Reygadas' Films</i>
    <br />
    <i>Awarded with excellence</i>
    `,
    {
      start: { day: 1, month: 8, year: 2013 },
      end: { day: 30, month: 6, year: 2015 }
    },
    'studies',
    {
      description: 'ibo logo',
      src: '/ib.jpg'
    }
  )
]
