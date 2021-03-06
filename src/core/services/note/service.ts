import { getRequester } from 'core/api'
import {
  UPDATE_NOTE,
  UPDATE_NOTE_STATUS,
  UPDATE_NOTE_LIST,
  NOTE_LIST_LOADING,
  NOTE_LIST_ERROR,
  UPDATE_NOTE_LIST_TOTAL_NUMBER,
} from 'core/store/note'
import { localStorageHandler } from 'core/utils'

import {} from 'date-fns'

export const updateNote = (note: string) => (dispatch: any) => {
  dispatch(UPDATE_NOTE(note))
}

export const setStatus = (status: NoteStoreStatus) => (dispatch: any) => {
  dispatch(UPDATE_NOTE_STATUS(status))
}

export const getNotesTotalNumber = () => async (dispatch: any) => {
  try {
    const totalNumber = await getRequester('/note/count')
    dispatch(UPDATE_NOTE_LIST_TOTAL_NUMBER(totalNumber?.data.noteCount))
  } catch (e) {
    dispatch(NOTE_LIST_ERROR(true))
  }
}

export const listNotes = (page: number, limit: number) => async (dispatch: any) => {
  dispatch(NOTE_LIST_LOADING(true))
  try {
    const notes = await getRequester('/note/list', { page, limit })
    if (!notes?.data.notesList.length) return
    dispatch(NOTE_LIST_ERROR(false))
    dispatch(UPDATE_NOTE_LIST(notes?.data.notesList))
  } catch (e) {
    dispatch(NOTE_LIST_ERROR(true))
  }
}

export const updateCurrentNote = (newNoteId: string) => async (
  dispatch: any,
  getState: GetState
) => {
  const {
    note: { notes },
  } = getState()

  const newNote: Note = notes.filter((item: Note) => item.key === newNoteId)[0]
  dispatch(UPDATE_NOTE(undefined))
  dispatch(UPDATE_NOTE(newNote))
}
export const saveCurrentNoteLocal = (note: Note) => async (dispatch: any) => {
  localStorageHandler.set(note.key, note)
}
export const saveCurrentNoteRemote = (note: Note) => async (dispatch: any) => {}
