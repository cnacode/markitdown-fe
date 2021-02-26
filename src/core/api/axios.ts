import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const inDevelopmentOrTesting =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'

export const mockServer = inDevelopmentOrTesting ? new MockAdapter(axios) : {}

axios.interceptors.response.use((res) => {
  console.log(res.data)
  return res
})

export default axios
