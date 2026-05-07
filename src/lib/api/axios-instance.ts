import Axios, { type AxiosRequestConfig } from 'axios'

export const axiosInstance = Axios.create({
  baseURL: '/',
})

export function customInstance<T>(config: AxiosRequestConfig): Promise<T> {
  return axiosInstance(config).then(({ data }) => data)
}
