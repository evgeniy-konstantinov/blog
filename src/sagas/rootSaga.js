import { spawn } from 'redux-saga/effects';
import { dataWatcher } from './singUpSaga';

export default function* rootSaga() {
  yield console.log('saga reade');
  yield spawn(dataWatcher);
}
