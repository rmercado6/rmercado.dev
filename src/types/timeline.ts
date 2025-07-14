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

export type TimelineItem = {
  title: string
  description: string
  tags: string[]
  date: {
    start?: DateDetails
    end?: DateDetails
  }
  category: Category
  img?: Image
}

export function getDateString(item: TimelineItem) {
  const startStr = item.date.start
    ? `${item.date.start.day}/${item.date.start.month}/${item.date.start.year}`
    : null
  const endStr = item.date.end
    ? `${item.date.end.day}/${item.date.end.month}/${item.date.end.year}`
    : 'today'
  return startStr ? `${startStr} - ${endStr}` : `${endStr}`
}

export function getStartDate(item: TimelineItem) {
  return new Date(
    item.date.start.year,
    item.date.start.month,
    item.date.start.day
  )
}

export function getEndDate(item: TimelineItem) {
  return new Date(item.date.end.year, item.date.end.month, item.date.end.day)
}
