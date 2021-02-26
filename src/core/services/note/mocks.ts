import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { emptyNotePlaceHolder } from 'core/utils'
;(() => {
  let mockNotes
  if (process.env.REACT_APP_MOCK_NOTE_RESPONSES) {
    mockNotes = new MockAdapter(axios)
  }

  if (!mockNotes) return

  const notesList: String[] = Array(5).map((note) => emptyNotePlaceHolder)

  mockNotes.onGet('/note/list').reply(200, notesList)
})()
