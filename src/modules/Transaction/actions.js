import types from './types';

export default {
  getTransaction,
  getTransactionSuccess,
  getTransactionFailure
};

function getTransaction(payload) {
  return {
    type: types.GET_REQUEST,
    payload
  };
}

function getTransactionSuccess(payload) {
  return {
    type: types.GET_SUCCESS,
    payload
  };
}

function getTransactionFailure(error) {
  return {
    type: types.GET_FAILURE,
    error
  };
}
