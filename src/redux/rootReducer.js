/**
 * @Title : Root-Reducer
 * @dev : add your new state files here
 */

import { combineReducers } from "redux";

// Import your reducers below this line
// eg. import egReducer from './eg/eg.reducer;
import userReducer from "./User/user.reducer";

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;