import { combineReducers } from "redux";

import common from "./modules/common/reducer";
import block from "./modules/Block/reducer";
import transaction from "./modules/Transaction/reducer";

const rootReducer = combineReducers({
  common,
  block,
  transaction
});

export default rootReducer;
