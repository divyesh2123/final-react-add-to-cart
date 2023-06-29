import { applyMiddleware, createStore } from "redux";
import counterReducer from "../reducer/counterReducer";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import createSagaMiddleware  from 'redux-saga'
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware()




const store = createStore(
    rootReducer, /* preloadedState, */
    applyMiddleware(sagaMiddleware)
   );

   sagaMiddleware.run(rootSaga);

export default store;