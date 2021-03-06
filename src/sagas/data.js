import { takeEvery, put, call, fork, select } from 'redux-saga/effects';
import Api from '../api/api';
import * as types from '../constants/actionTypes';

export function* getProjects(action) {
  try {
    const response = yield call(Api.get, 'projects');

    yield put({
      type: types.RECEIVE_PROJECTS,
      projects: response,
    });
  } catch (error) {
    yield put({
      type: types.NOT_RECEIVE_PROJECTS,
      errors: response,
    });
    yield put({ type: types.NETWORK_ERROR, error });
  }
}

export function* getKpiEntries({ id }) {
  try {
    const response = yield call(Api.get, `kpi-entries?index=${id}`);

    yield put({
      type: types.RECEIVE_KPI_ENTRIES,
      id,
      entries: response,
    });
  } catch (error) {
    yield put({
      type: types.NOT_RECEIVE_KPI_ENTRIES,
      errors: [],
    });
    yield put({ type: types.NETWORK_ERROR, error });
  }
}
export default function* watchUsers() {
  yield takeEvery(types.REQUEST_PROJECTS, getProjects);
  yield takeEvery(types.REQUEST_KPI_ENTRIES, getKpiEntries);
}
