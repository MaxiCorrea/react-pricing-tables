import thunk from "redux-thunk";
import { ITablesState, TablesReducer } from "../reducers/TablesReducer";
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
  compose,
} from "redux";

export interface IApplicationState {
  tables: ITablesState;
}

const rootReducer = combineReducers<IApplicationState>({
  tables: TablesReducer,
});

export default function configureStore(): Store<IApplicationState> {
  return createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : compose
    )
  );
}
