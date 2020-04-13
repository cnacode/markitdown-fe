import reducer from "./reducers"
import { setNote, setStatus } from "./actions"
export type NoteState = {
    currentNote: string
    notes: string[]
    status: number
}

export { reducer, setNote, setStatus }
