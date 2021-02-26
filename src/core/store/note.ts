import { createAction, handleActions } from 'redux-actions'
import { emptyNotePlaceHolder } from 'core/utils'
export const UPDATE_NOTE = createAction('UPDATE_NOTE')
export const UPDATE_NOTE_STATUS = createAction('UPDATE_NOTE_STATUS')
export const UPDATE_NOTE_LIST = createAction('UPDATE_NOTE_LIST')

enum NoteStoreStatusType {
  local,
  syncing,
  synced,
}

export type NoteStoreType = {
  currentNote: string
  notes: string[]
  status: NoteStoreStatusType
}

const defaultState: NoteStoreType = {
  currentNote: emptyNotePlaceHolder,
  notes: [],
  status: 2,
}

const handlers = {
  UPDATE_NOTE: (state: any, action: any) => ({
    ...state,
    currentNote: action.payload,
  }),
  UPDATE_NOTE_LIST: (state: any, action: any) => ({
    ...state,
    list: action.payload,
  }),
}

const reducer = handleActions<NoteStoreType, string>(handlers, defaultState)
export default reducer
