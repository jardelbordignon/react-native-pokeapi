import axios, { AxiosError, Method } from 'axios'

import { ApiError } from 'src/errors/api'

export class ApiService {
  private endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  public get<T = any>(url: string, params?: any): Promise<T> {
    return this.request<T>('GET', url, params)
  }

  public post<T = any>(url: string, body: any): Promise<T> {
    return this.request<T>('POST', url, body)
  }

  public put<T = any>(url: string, body: any): Promise<T> {
    return this.request<T>('PUT', url, body)
  }

  public delete<T = any>(url: string, params?: any): Promise<T> {
    return this.request<T>('DELETE', url, params)
  }

  public upload<T = any>(
    url: string,
    data: FormData,
    onProgress: (progress: number) => void
  ): Promise<T> {
    return this.request<T>('POST', url, data, onProgress)
  }

  private async request<T = any>(
    method: Method,
    url: string,
    data?: any,
    onProgress?: (progress: number) => void
  ): Promise<T> {
    try {
      onProgress && onProgress(0)
      // const authToken = store.getState().authToken.value

      const request = axios.request({
        baseURL: this.endpoint,
        url,
        method,
        headers: {
          // Authorization: authToken ? `Bearer ${authToken}` : null,
          'Content-Type':
            data instanceof FormData
              ? 'multipart/form-data'
              : 'application/json',
        },
        params: method === 'GET' ? data : null,
        data: method === 'POST' || method === 'PUT' ? data : null,
        onUploadProgress: (progress: ProgressEvent) => {
          onProgress && onProgress((progress.loaded / progress.total) * 100)
        },
      })

      const response = await request
      onProgress && onProgress(100)

      return response.data || {}
    } catch (err: any) {
      return this.handleError<T>(err)
    }
  }

  private async handleError<T>(err: AxiosError): Promise<T> {
    if (!err.config || !err.response) throw err
    throw new ApiError(err.config, err.response, err)
  }
}

export const pokeapi = new ApiService('https://pokeapi.co/api/v2/pokemon')
