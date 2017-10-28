import { combineReducers } from 'redux';
import TestReducer from './reducer-test-reducer';

const rootReducer = combineReducers({
  test: TestReducer
});

export default rootReducer;