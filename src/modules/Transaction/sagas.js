import { put, call, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';

import { callAPI } from '../common/commonApiCall';
import apiURLs from '../../config/url-config';
import types from './types';
import actions from './actions';

function* getTransaction(action) {
  try {
    const resp = yield call(
      callAPI,
      apiURLs.transactionUrl.get,
      get(action, 'payload', '')
    );

    if (!resp.error && !resp.message) {
      yield put(actions.getTransactionSuccess({ resp }));
    } else {
      yield put(actions.getTransactionFailure(resp.message));
    }
  } catch (error) {
    yield put(actions.getTransactionFailure('Error'));
  }
}

export default function* transactionSaga() {
  yield takeLatest(types.GET_REQUEST, getTransaction);
}
