/**
 * @Title : redux-store
 * @use : This store all the states in the app
 * @dev : There is no need to change or add any default state in here.
 *        If needed please create a new folder in the same directory and connect that to rootreducer.
 */

import {createStore} from 'redux';
import rootReducer from './rootReducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducer,
    composeWithDevTools(),
);

export default store;