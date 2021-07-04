import { put, takeEvery, call } from "redux-saga/effects";
import { commonConstants } from "../constants";
import { callAPI } from "./commonApiCall";
import apiURLs from "../config/url-config";
import { commonActions, alertActions } from "../actions";

function* metadata(action) {
  try {
    const data = yield call(callAPI, apiURLs.metadataUrl, action.payload);

    if (data.status === true) {
      yield put(commonActions.getMetaDataSuccess(data.data));
    } else {
      yield put(alertActions.error(data.message));
    }
  } catch (error) {
    yield put(alertActions.error("Something went wrong!"));
  }
}

export function* commonSaga() {
  yield takeEvery(commonConstants.METADATA_REQUEST, metadata);
}
