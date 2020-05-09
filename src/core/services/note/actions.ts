import { createAction } from "redux-actions";

export const UPDATE_CURRENT_NOTE = createAction("UPDATE_CURRENT_NOTE");
export const UPDATE_CURRENT_NOTE_STATUS = createAction(
  "UPDATE_CURRENT_NOTE_STATUS"
);

export const updateCurrentNote = (note: string) => (dispatch: any) => {
  dispatch(UPDATE_CURRENT_NOTE(note));
};

export const setStatus = (status: string) => (dispatch: any) => {
  switch (status) {
    case "local":
      dispatch(UPDATE_CURRENT_NOTE_STATUS(1));
      break;
    case "saved":
      dispatch(UPDATE_CURRENT_NOTE_STATUS(2));
      break;
    case "saving":
    default:
      dispatch(UPDATE_CURRENT_NOTE_STATUS(0));
      break;
  }
};
