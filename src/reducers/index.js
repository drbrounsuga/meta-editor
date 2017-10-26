import { combineReducers } from 'redux';
import ActiveAuthor from './reducer-test-author';

const rootReducer = combineReducers({
  author: ActiveAuthor
});

export default rootReducer;