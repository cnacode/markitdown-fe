import { getRequester } from 'core/api'
import {
  UPDATE_NOTE,
  UPDATE_NOTE_STATUS,
  UPDATE_NOTE_LIST,
  NOTE_LIST_LOADING,
  NOTE_LIST_ERROR,
  UPDATE_NOTE_LIST_TOTAL_NUMBER,
} from 'core/store/note'

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
