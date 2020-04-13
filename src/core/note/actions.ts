import { createAction } from "redux-actions";

export const updateCurrentNote = createAction("UPDATE_CURRENT_NOTE");
export const updateCurrentNoteStatus = createAction("UPDATE_CURRENT_NOTE_STATUS");

export const setNote = (note: string) => (dispatch: any) => {
  dispatch(updateCurrentNote(note));
};

export const setStatus = (status: string) => (dispatch: any) => {
  switch(status){
    case 'local':
      dispatch(updateCurrentNoteStatus(1));
      break;
    case 'saved':
      dispatch(updateCurrentNoteStatus(2));
      break;
    case 'saving':
    default:
      dispatch(updateCurrentNoteStatus(0));
      break;
  }
};
