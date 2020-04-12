import reducer from "./reducers"
import { updateNote } from "./actions"
export type NoteState = {
    currentNote: string
    notes: string[]
}

export { reducer, updateNote }
