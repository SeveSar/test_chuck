import type { IChuckItem } from '@/types'

export class ChuckModel {
  categories: string[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
  constructor(item: IChuckItem) {
    this.categories = item.categories
    this.created_at = item.created_at
    this.icon_url = item.icon_url
    this.id = item.id
    this.updated_at = item.updated_at
    this.url = item.url
    this.value = item.value
  }

  getDate(dateStr: string) {
    const formatter = new Intl.DateTimeFormat('ru')
    const date = new Date(dateStr)
    return formatter.format(date)
  }
}
