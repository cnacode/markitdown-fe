import { AuthenticationStoreImported } from 'core/store/authentication'
import { NoteType as NoteStoreType, NoteStoreStatusImported } from 'core/store/note'

declare global {
  //App Types
  type AppStore = NoteStore | AuthenticationStore

  //Authentication Types
  type AuthenticationStore = AuthenticationStoreImported

  //Note Types
  type NoteStore = NoteStoreType
  type NoteStoreStatus = NoteStoreStatusImported
}
