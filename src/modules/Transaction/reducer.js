import types from './types';

const initialState = {
  error: null,
  details: null
};

export default function users(state = initialState, action) {
  let oldstate = state;
  let currentstate = false;

  switch (action.type) {
    case types.GET_REQUEST:
      currentstate = {
        error: null,
        details: null
      };
      break;
    case types.GET_SUCCESS:
      currentstate = {
        details: action.payload.resp
      };
      break;
    case types.GET_FAILURE:
      currentstate = { error: action.error };
      break;

    default:
      break;
  }

  if (!!currentstate) {
    return { ...oldstate, ...currentstate };
  } else {
    return oldstate;
  }
}
