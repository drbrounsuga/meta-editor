import C from '../actions/types';

const initialState = { test: 0 };

export default function(state = initialState, action){
  switch(action.type){
    case C.TEST_INCREMENT:
      return Object.assign({}, state, {test: state.test + action.payload});

    case C.TEST_DECREMENT:
      return Object.assign({}, state, {test: state.test - action.payload});

    default:
      return state;
  }
}