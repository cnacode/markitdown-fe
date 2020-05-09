import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as authentication } from "core/services/authentication";
import { reducer as note } from "core/services/note";

const rootReducer = combineReducers({
  authentication,
  note,
});

export default createStore(rootReducer, {}, applyMiddleware(thunk));

export type RootType = ReturnType<typeof rootReducer>;
