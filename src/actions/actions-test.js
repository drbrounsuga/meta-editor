import T from './types';

// Action Creators
export function addValue(val){
  return {
    type: T.TEST_INCREMENT,
    payload: val
  };
}

export function subtractValue(val){
  return {
    type: T.TEST_DECREMENT,
    payload: val
  };
}

// Thunk
export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addValue(50));
    }, 1000);
  };
}