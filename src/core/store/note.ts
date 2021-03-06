import { createAction, handleActions } from 'redux-actions'
import { emptyNotePlaceHolder } from 'core/utils'
export const UPDATE_NOTE = createAction('UPDATE_NOTE')
export const UPDATE_NOTE_STATUS = createAction('UPDATE_NOTE_STATUS')
export const UPDATE_NOTE_LIST = createAction('UPDATE_NOTE_LIST')
export const UPDATE_NOTE_LIST_TOTAL_NUMBER = createAction('UPDATE_NOTE_LIST_TOTAL_NUMBER')
export const NOTE_LIST_LOADING = createAction('NOTE_LIST_LOADING')
export const NOTE_LIST_ERROR = createAction('NOTE_LIST_ERROR')

enum NoteStoreStatusType {
  local,
  syncing,
  synced,
}

export type NoteStoreType = {
  currentNote: string
  currentNoteStatus: NoteStoreStatusType
  notes: string[]
  notesLoading: boolean
  notesError: boolean
  notesTotalNumber: Number
}

const defaultState: NoteStoreType = {
  currentNote: emptyNotePlaceHolder,
  currentNoteStatus: 2,
  notesLoading: true,
  notes: [],
  notesError: false,
  notesTotalNumber: 0,
}

const handlers = {
  UPDATE_NOTE: (state: any, action: any) => ({
    ...state,
    currentNote: action.payload,
  }),
  UPDATE_NOTE_LIST: (state: any, action: any) => {
    return {
      ...state,
      notes: [...state.notes, ...action.payload],
    }
  },
  NOTE_LIST_LOADING: (state: any, action: any) => ({
    ...state,
    notesLoading: action.payload,
  }),
  NOTE_LIST_ERROR: (state: any, action: any) => ({
    ...state,
    notesError: action.payload,
  }),
  UPDATE_NOTE_LIST_TOTAL_NUMBER: (state: any, action: any) => ({
    ...state,
    notesTotalNumber: action.payload,
  }),
}

const reducer = handleActions<NoteStoreType, string>(handlers, defaultState)
export default reducer
