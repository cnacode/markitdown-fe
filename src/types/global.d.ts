import { AuthenticationStoreImported } from 'core/store/authentication'
import { NoteType as NoteStoreType, NoteStoreStatusImported } from 'core/store/note'
import { ApplicationStore as ApplicationStoreImported } from 'core/store'

declare global {
  //App Types
  type AppStore = NoteStore | AuthenticationStore

  //Authentication Types
  type AuthenticationStore = AuthenticationStoreImported

  //Note Types
  type Note = {
    key: string
    body: string
    date: string
  }

  type NoteInStore = {
    [key: string]: Note
  }

  enum SyncStatus {
    SYNCED,
    SYNCING,
  }

  type NoteStore = NoteStoreType
  type NoteStoreStatus = NoteStoreStatusImported

  type ApplicationStore = ApplicationStoreImported

  type GetState = () => AppStore
}
