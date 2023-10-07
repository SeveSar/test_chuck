import { ChuckModel } from '@/models/chuck'
import type { IChuckItem } from '@/types'
import type { AxiosInstance } from 'axios'
class ChuckService {
  $http: AxiosInstance
  constructor(httpClient: AxiosInstance) {
    this.$http = httpClient
  }

  async get(filters?: string) {
    const res = await this.$http.get<{ result: IChuckItem[]; total: number }>(
      `/jokes/search?query=${filters}`
    )
    return { ...res.data, result: res.data.result.map((item) => new ChuckModel(item)) }
  }
}

export { ChuckService }
