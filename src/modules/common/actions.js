import types from './types';

export default {
  showLoader,
  hideLoader
};

function showLoader() {
  return { type: types.SHOW_LOADER };
}

function hideLoader() {
  return { type: types.HIDE_LOADER };
}
