import { createAction, handleActions } from 'redux-actions'

export const SET_NOTE_CONTENT = createAction('SET_NOTE_CONTENT')
export const SET_NOTE_STATUS = createAction('SET_NOTE_STATUS')
export const SET_CURRENT_NOTE = createAction('SET_CURRENT_NOTE')
export const SET_NOTE_LIST = createAction('SET_NOTE_LIST')
export const SET_NOTE_LIST_TOTAL_NUMBER = createAction('SET_NOTE_LIST_TOTAL_NUMBER')
export const NOTE_LIST_LOADING = createAction('NOTE_LIST_LOADING')
export const NOTE_LIST_ERROR = createAction('NOTE_LIST_ERROR')

export type NoteStoreType = {
  list: NoteInStore
  notesLoading: boolean
  notesError: boolean
  notesTotalNumber: Number
  syncStatus: SyncStatus
  currentNoteId: string | undefined
}

const defaultState: NoteStoreType = {
  notesLoading: true,
  list: {},
  notesError: false,
  notesTotalNumber: 0,
  syncStatus: 1,
  currentNoteId: undefined,
}

const handlers = {
  SET_NOTE_CONTENT: (state: any, action: any) => ({
    ...state,
    list: {
      ...state.list,
      [action.payload.key]: action.payload,
    },
  }),
  SET_CURRENT_NOTE: (state: any, action: any) => ({
    ...state,
    currentNoteId: action.payload,
  }),
  SET_NOTE_LIST: (state: any, action: any) => ({
    ...state,
    list: {
      ...state.list,
      ...action.payload,
    },
  }),
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
