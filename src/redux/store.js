import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
