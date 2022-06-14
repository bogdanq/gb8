import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { getPublicGistsApi, getGistsByNameApi } from "../api/gists";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { gistsReducer } from "./gists";
import {
  logger,
  timeScheduler,
  botMessage,
  crashReporter,
} from "./middlewares";

const api = { getPublicGistsApi, getGistsByNameApi };

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
  whitelist: ["profile"],
};

const rootReducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  gists: gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument(api),
      logger,
      timeScheduler,
      botMessage,
      crashReporter
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
