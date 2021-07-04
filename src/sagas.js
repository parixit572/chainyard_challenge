import { all } from 'redux-saga/effects';
import blockSaga from './modules/Block/sagas';
import transactionSaga from './modules/Transaction/sagas';

export default function* rootSaga() {
  yield all([blockSaga(), transactionSaga()]);
}
