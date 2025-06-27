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
