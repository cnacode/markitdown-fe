import MockAdapter from 'axios-mock-adapter/types'
import { apiBase } from 'core/config'
import { emptyNotePlaceHolder } from 'core/utils'
import { format } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'

export default (mockNotes: MockAdapter) => {
  if (!process.env.REACT_APP_MOCK_NOTE_RESPONSES) return

  if (!mockNotes) return

  let lastServedIndex = 0
  const noteCount: Number = 100

  const notesList = (limit: number): Note[] => {
    if (lastServedIndex >= noteCount) return []
    lastServedIndex += limit
    const mockedList = [...Array(limit)].map(() => {
      const key = uuidv4()
      const date = format(new Date(), 'MMM dd yyyy')

      return {
        body: emptyNotePlaceHolder,
        key,
        date,
      }
    })
    return mockedList
  }

  mockNotes.onGet(/\/note\/list/).reply(() => {
    return [200, { notesList: notesList(10) }]
  })
  mockNotes.onGet(apiBase + '/note/count').reply(200, { noteCount })
}
