import { combineReducers } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authentication from 'core/store/authentication'
import note from 'core/store/note'

const rootReducer = combineReducers({
  authentication,
  note,
})

const reduxAddons = compose(
  applyMiddleware(thunk),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export default createStore(rootReducer, {}, reduxAddons)

export type ApplicationStore = ReturnType<typeof rootReducer>
