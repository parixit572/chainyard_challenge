import types from './types';

export default {
  getLatestBlock,
  getLatestBlockSuccess,
  getLatestBlockFailure,
  getBlock,
  getBlockSuccess,
  getBlockFailure
};

function getLatestBlock(payload) {
  return { type: types.GET_LATEST_REQUEST, payload };
}

function getLatestBlockSuccess(payload) {
  return { type: types.GET_LATEST_SUCCESS, payload };
}

function getLatestBlockFailure(error) {
  return { type: types.GET_LATEST_FAILURE, error };
}

function getBlock(payload) {
  return { type: types.GET_REQUEST, payload };
}

function getBlockSuccess(payload) {
  return { type: types.GET_SUCCESS, payload };
}

function getBlockFailure(error) {
  return { type: types.GET_FAILURE, error };
}
