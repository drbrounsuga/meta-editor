import T from '../actions/types';

const initialState = { 
  test: 0 
};

export default function(state = initialState, action){
  switch(action.type){
    case T.TEST_INCREMENT:
      return {
        ...state,
        test: state.test + action.payload
      };

    case T.TEST_DECREMENT:
      return {
        ...state,
        test: state.test - action.payload
      };

    default:
      return state;
  }
}