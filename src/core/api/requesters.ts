import axios from 'axios'
import cookie from 'js-cookie'
import { serialize } from 'core/utils'

export const postRequester = async (route: string, body: any) => {
  const token = cookie.get('tk')

  axios.interceptors.request.use((req) => {
    // `req` is the Axios request config, so you can modify
    // the `headers`.
    req.headers.authorization = `Bearer ${token}`
    return req
  })

  try {
    const response = await axios.post(route, body)
    console.log('res', response)
  } catch (error) {
    console.log('err', error)
  }
}

export const getRequester = async (route: string, query?: { [key: string]: any }) => {
  const serializedQuery = query ? serialize(query) : ''
  const token = cookie.get('tk')

  axios.interceptors.request.use((req) => {
    // `req` is the Axios request config, so you can modify
    // the `headers`.
    req.headers.authorization = `Bearer ${token}`
    return req
  })

  try {
    const response = await axios.get(`${route}?${serializedQuery}`)
    console.log('res', response)
  } catch (error) {
    console.log('err', error)
  }
}
