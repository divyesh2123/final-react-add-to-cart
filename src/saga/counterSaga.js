
import {delay, put, takeEvery, takeLatest, takeLeading}  from 'redux-saga/effects';
import { Incr } from '../action/counterAction';
function* asncIncrement()
{

    yield delay(2000);
    yield put(Incr())

}


export function* watcherIncrement()
{
  

    yield takeLeading('INC_ASYC',asncIncrement);

}