import axios from 'axios'
import cookie from 'js-cookie'
import { serialize } from 'core/utils'
import { apiBase as base } from 'core/config'
import mockNotes from 'core/services/note/mocks'
import MockAdapter from 'axios-mock-adapter'

axios.interceptors.response.use((res) => {
  console.log('res log:', res.data)
  return res
})

axios.interceptors.request.use((req) => {
  console.log('req log:', req)
  return req
})

const mock = new MockAdapter(axios, { onNoMatch: 'throwException' })
mockNotes(mock)

export const postRequester = async (route: string, body: any) => {
  const token = cookie.get('tk')

  axios.interceptors.request.use((req) => {
    req.headers.authorization = `Bearer ${token}`
    return req
  })

  try {
    const response = await axios.post(route, body)
    return response
  } catch (error) {
    console.log('err', error)
  }
}

export const getRequester = async (route: string, query?: { [key: string]: any }) => {
  const serializedQuery = query ? '?' + serialize(query) : ''
  const token = cookie.get('tk')

  axios.interceptors.request.use((req) => {
    req.headers.authorization = `Bearer ${token}`
    return req
  })

  try {
    const url = `${base}${route}${serializedQuery}`
    const response = await axios.get(url)
    return response
  } catch (error) {
    console.log('err', error)
  }
}
