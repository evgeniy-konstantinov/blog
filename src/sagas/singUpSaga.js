import { call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { USER_SING_UP_DATA } from '../redux/actions';

function setUser() {
  axios
    .post('http://test-blog-api.ficuslife.com/api/v1/auth')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

export function* userRequestData() {
  try {
    const data = yield call(setUser);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

export function* dataWatcher() {
  yield takeEvery(USER_SING_UP_DATA, userRequestData);
}
