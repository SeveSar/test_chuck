import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api'
import type { IChuckItem } from '@/types'
import type { ChuckModel } from '@/models/chuck'

export const useChuckStore = defineStore('chuck', () => {
  const cards = ref<ChuckModel[]>([])

  async function getCards(search?: string) {
    const res = await api.chuck.get(search)
    cards.value = res.result
  }

  return { getCards, cards }
})
