import { createAction } from "redux-actions"
import { EditorState, convertToRaw } from "draft-js"
import { draftToMarkdown } from "markdown-draft-js";


export const updateCurrentNote = createAction("UPDATE_CURRENT_NOTE")

export const updateNote = (state: EditorState) => (dispatch: any) => {
    const raw = convertToRaw(state.getCurrentContent())
    const markdown = draftToMarkdown(raw)
    dispatch(updateCurrentNote(markdown))
}
