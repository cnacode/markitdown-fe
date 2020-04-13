import { handleActions } from "redux-actions";
import { NoteState } from "./index";
import { updateCurrentNote as loginStartAction } from "./actions";

const updateCurrentNote = loginStartAction.toString();

const placeHolder =
  "# This is a header And this is a paragraph # This is a header nd this is a paragraph # This is a header And this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph";

const defaultState: NoteState = {
  currentNote: placeHolder,
  notes: [],
  status: 2,
};

const handlers = {
  [updateCurrentNote]: (state: any, action: any) => ({
    ...state,
    currentNote: action.payload,
  }),
};

const reducer = handleActions<NoteState, string>(handlers, defaultState);
export default reducer;
