import { getRequester } from 'core/api'
import {
  SET_NOTE_CONTENT,
  SET_NOTE_LIST,
  NOTE_LIST_LOADING,
  NOTE_LIST_ERROR,
  SET_NOTE_STATUS,
  SET_NOTE_LIST_TOTAL_NUMBER,
  SET_CURRENT_NOTE,
} from 'core/store/note'

export const setStatus = (status: NoteStoreStatus) => (dispatch: any) => {
  dispatch(SET_NOTE_STATUS(status))
}

export const getNotesTotalNumber = () => async (dispatch: any) => {
  try {
    const totalNumber = await getRequester('/note/count')
    dispatch(SET_NOTE_LIST_TOTAL_NUMBER(totalNumber?.data.noteCount))
  } catch (e) {
    dispatch(NOTE_LIST_ERROR(true))
  }
}

export const listNotes = (page: number, limit: number) => async (
  dispatch: any,
  getState: GetState
) => {
  dispatch(NOTE_LIST_LOADING(true))
  try {
    const response = await getRequester('/note/list', { page, limit })
    if (!response?.data.notesList.length) return

    const newNotesList: NoteInStore = {}

    response?.data.notesList.forEach((note: Note) => {
      newNotesList[note.key] = note
    })

    dispatch(SET_NOTE_LIST(newNotesList))
    dispatch(NOTE_LIST_ERROR(false))
  } catch (e) {
    console.log(e)
    dispatch(NOTE_LIST_ERROR(true))
  }
}

export const setCurrentNote = (newNoteId: string) => async (dispatch: any, getState: GetState) => {
  dispatch(SET_CURRENT_NOTE(undefined))
  dispatch(SET_CURRENT_NOTE(newNoteId))
}
export const saveNote = (note: Note) => async (dispatch: any) => {
  dispatch(SET_NOTE_CONTENT(note))
}
