import { applyMiddleware, createStore } from "redux";
import counterReducer from "../reducer/counterReducer";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

const store = createStore(
    rootReducer, /* preloadedState, */
    applyMiddleware(thunk)
   );

export default store;