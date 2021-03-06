import MockAdapter from 'axios-mock-adapter/types'
import { apiBase } from 'core/config'
import { emptyNotePlaceHolder } from 'core/utils'
import { format } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'

let lastServedIndex = 0
const noteCount: Number = 100

const notesList = (limit: number): Note[] => {
  if (lastServedIndex >= noteCount) return []
  lastServedIndex += limit
  const mockedList = [...Array(limit)].map((item, index) => {
    const key = uuidv4()
    const date = format(new Date(), 'MMMM dd yyyy')

    return {
      body: emptyNotePlaceHolder.replace(
        'horizontal line:',
        `horizontal line:${index + lastServedIndex}`
      ),
      key,
      date,
    }
  })

  return mockedList
}

export const mockNotes = (mock: MockAdapter) => {
  if (!process.env.REACT_APP_MOCK_NOTE_RESPONSES) return

  if (!mock) return

  mock.onGet(/\/note\/list/).reply(() => {
    return [200, { notesList: notesList(10) }]
  })
  mock.onGet(apiBase + '/note/count').reply(200, { noteCount })
}
