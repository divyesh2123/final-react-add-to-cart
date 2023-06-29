import {all} from 'redux-saga/effects'
import { watcherIncrement } from './counterSaga';
import { watchGetPost } from './postSaga';

function* rootSaga()
{

    yield all([watcherIncrement(),watchGetPost()]);
}

export default rootSaga;