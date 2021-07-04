import { put, call } from 'redux-saga/effects';
import mockConfig from '../../config/mock-config';
import config from '../../config/config';
import actions from './actions';

const SELF_API_HOST = config.API_BASE_URL;

export function* callAPI(apiURL, reqData = '', requestMethod = 'GET') {
  let withMock = false;
  try {
    let finalAPIUrl = SELF_API_HOST + apiURL;
    if (
      mockConfig &&
      (mockConfig.globalMock || (mockConfig[apiURL] && mockConfig[apiURL].mock))
    ) {
      if (mockConfig[apiURL] && mockConfig[apiURL].mockFile) {
        finalAPIUrl = '/_mocks/' + mockConfig[apiURL].mockFile;
        requestMethod = 'GET';
        withMock = true;
      }
    }

    let data = false;
    yield put(actions.showLoader());
    if (requestMethod === 'GET') {
      if (!withMock) {
        finalAPIUrl += reqData;
      }
      data = yield call(fetch, finalAPIUrl);
    } else {
      const requestOptions = {
        method: requestMethod,
        headers: { ...getRequestHeaders() },
        body: JSON.stringify({
          ...reqData
        })
      };
      data = yield call(fetch, finalAPIUrl, requestOptions);
    }
    yield put(actions.hideLoader());

    const response = yield data.json();
    return response;
  } catch (e) {
    yield put(actions.hideLoader());
    throw e;
  }
}

export const getRequestHeaders = () => {
  let headers = {
    //"Content-Type": "application/json",
    //"Content-Type": 'multipart/form-data',
  };

  return headers;
};
