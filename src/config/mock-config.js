import urlconfig from './url-config';

var mockConfig = {
  globalMock: false
};
mockConfig[urlconfig.blockUrl.get] = {
  mock: false,
  mockFile: 'block-get.json'
};
mockConfig[urlconfig.blockUrl.getLatest] = {
  mock: false,
  mockFile: 'block-get-latest.json'
};
mockConfig[urlconfig.transactionUrl.get] = {
  mock: false,
  mockFile: 'transaction-get.json'
};

export default mockConfig;
