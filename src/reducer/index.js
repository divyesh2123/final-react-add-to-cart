import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import productReducer from "./productReducer";
import useReducer from "./useReducer";
import postsReducer from "./postsReducer";

const rootReducer =combineReducers({

    counter: counterReducer,
    product: productReducer,
    user: useReducer,
    post : postsReducer
})

export default rootReducer;