import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import productReducer from "./productReducer";
import useReducer from "./useReducer";

const rootReducer =combineReducers({

    counter: counterReducer,
    product: productReducer,
    user: useReducer
})

export default rootReducer;