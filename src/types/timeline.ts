export type Category = 'studies' | 'professional' | 'personal' | 'music'

export type DateDetails = {
  day: number
  month: number
  year: number
}

export class TimelineItem {
  title: string
  description: string
  date: { start: DateDetails; end: DateDetails }
  category: Category
  img?: string

  constructor(
    title: string,
    description: string,
    date: {
      start: DateDetails
      end: DateDetails
    },
    category: Category,
    img?: string
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
    'University of Edinburgh',
    {
      start: { day: 11, month: 9, year: 2023 },
      end: { day: 21, month: 11, year: 2024 }
    },
    'studies',
    '/accenture.png'
  ),
  new TimelineItem(
    'BSc Software Engineering',
    'Universidad Autónoma de Nuevo León',
    {
      start: { day: 1, month: 8, year: 2015 },
      end: { day: 31, month: 5, year: 2020 }
    },
    'studies'
  ),
  new TimelineItem(
    'Internation Baccaleureate Organization Diploma Progranmme',
    'Universidad de Monterrey',
    {
      start: { day: 1, month: 8, year: 2013 },
      end: { day: 30, month: 6, year: 2015 }
    },
    'studies'
  ),
  new TimelineItem(
    'Professional Experience',
    'Professional Experience',
    {
      start: { day: 1, month: 1, year: 2020 },
      end: { day: 1, month: 1, year: 2024 }
    },
    'professional'
  ),
  new TimelineItem(
    'Professional Experience',
    'Professional Experience',
    {
      start: { day: 1, month: 1, year: 2020 },
      end: { day: 1, month: 1, year: 2024 }
    },
    'professional'
  ),
  new TimelineItem(
    'Personal Projects',
    'Personal Projects',
    {
      start: { day: 1, month: 1, year: 2020 },
      end: { day: 1, month: 1, year: 2024 }
    },
    'personal'
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
