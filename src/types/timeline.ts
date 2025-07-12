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
  date: { start: DateDetails | null; end: DateDetails | null }
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
    const startStr = this.date.start
      ? `${this.date.start.day}/${this.date.start.month}/${this.date.start.year}`
      : null
    const endStr = this.date.end
      ? `${this.date.end.day}/${this.date.end.month}/${this.date.end.year}`
      : 'today'
    return startStr ? `${startStr} - ${endStr}` : `${endStr}`
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
