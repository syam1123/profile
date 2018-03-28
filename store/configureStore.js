import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "../reducers/index";
import DevTools from "../containers/DevTools";

const logger = createLogger();

export default function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, logger),
      DevTools.instrument(),
    ));
  return store;
}
