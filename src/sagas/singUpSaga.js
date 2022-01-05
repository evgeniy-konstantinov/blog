import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { USER_SING_UP_DATA } from '../redux/actions';

function setUser() {
  axios
    .post('http://test-blog-api.ficuslife.com/api/v1/auth')
    .then((response) => console.log(response.data));
}

export function* userRequestData() {
  const data = yield call(setUser);

  yield put({ type: USER_SING_UP_DATA });
}

export function* dataWatcher() {
  yield takeEvery(USER_SING_UP_DATA, userRequestData);
}
