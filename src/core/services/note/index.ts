import reducer from "./reducers"
import { updateCurrentNote, setStatus } from "./actions"


export type NoteState = {
    currentNote: string
    notes: string[]
    status: number
}

export { reducer, updateCurrentNote, setStatus }
