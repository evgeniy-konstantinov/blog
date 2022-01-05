import { all } from 'redux-saga/effects';
import { dataWatcher } from './singUpSaga';

export default function* rootSaga() {
  yield all([console.log('saga reade'), dataWatcher()]);
}
