import { ChuckService } from './services/chuck'

import { axiosInstance as axiosHttpClient } from './axios'

const api = {
  chuck: new ChuckService(axiosHttpClient)
}

export { api }
