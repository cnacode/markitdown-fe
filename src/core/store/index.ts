import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authentication from 'core/store/authentication'
import note from 'core/store/note'

const rootReducer = combineReducers({
  authentication,
  note,
})

export default createStore(rootReducer, {}, applyMiddleware(thunk))

export type RootType = ReturnType<typeof rootReducer>
