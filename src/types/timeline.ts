export type Category = 'studies' | 'professional' | 'personal' | 'music'

export type DateDetails = {
  day: number
  month: number
  year: number
}

type Image = {
  src: string
  description?: string
  class?: string
}

export class TimelineItem {
  title: string
  description: string
  date: { start: DateDetails; end: DateDetails }
  category: Category
  img?: Image

  constructor(
    title: string,
    description: string,
    date: {
      start: DateDetails
      end: DateDetails
    },
    category: Category,
    img?: Image
  ) {
    this.title = title
    this.description = description
    this.date = date
    this.category = category
    this.img = img
  }

  getDateString() {
    return `${this.date.start.day}/${this.date.start.month}/${this.date.start.year} - ${this.date.end.day}/${this.date.end.month}/${this.date.end.year}`
  }

  getStartDate() {
    return new Date(
      this.date.start.year,
      this.date.start.month,
      this.date.start.day
    )
  }

  getEndDate() {
    return new Date(this.date.end.year, this.date.end.month, this.date.end.day)
  }
}

export const timelineItems: TimelineItem[] = [
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
    'Internation Baccaleureate Organization Diploma Progranmme',
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
  ),
  new TimelineItem(
    'Music',
    'Music',
    {
      start: { day: 1, month: 1, year: 2020 },
      end: { day: 1, month: 1, year: 2024 }
    },
    'music'
  )
]
