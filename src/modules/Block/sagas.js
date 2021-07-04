import { put, takeEvery, call, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';

import { callAPI } from '../common/commonApiCall';
import apiURLs from '../../config/url-config';
import types from './types';
import actions from './actions';

function* getLatestBlock(action) {
  try {
    console.log('========getLatestBlock', action);
    const resp = yield call(callAPI, apiURLs.blockUrl.getLatest);

    if (resp.status === true) {
      yield put(actions.getLatestBlockSuccess({ resp }));
    } else {
      yield put(actions.getLatestBlockFailure('Error'));
    }
  } catch (error) {
    yield put(actions.getLatestBlockFailure('Error'));
  }
}

function* getBlock(action) {
  try {
    const resp = yield call(
      callAPI,
      apiURLs.blockUrl.get,
      get(action, 'payload', '')
    );

    if (!resp.error && !resp.message) {
      yield put(actions.getBlockSuccess({ resp }));
    } else {
      yield put(actions.getBlockFailure(resp.message));
    }
  } catch (error) {
    yield put(actions.getBlockFailure('Error'));
  }
}

export default function* blockSaga() {
  yield takeLatest(types.GET_REQUEST, getBlock);
  yield takeLatest(types.GET_LATEST_REQUEST, getLatestBlock);
}
