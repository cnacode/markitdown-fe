import { UPDATE_NOTE, UPDATE_NOTE_STATUS } from 'core/store/note'

export const updateNote = (note: string) => (dispatch: any) => {
  dispatch(UPDATE_NOTE(note))
}

export const setStatus = (status: NoteStoreStatus) => (dispatch: any) => {
  dispatch(UPDATE_NOTE_STATUS(status))
}
