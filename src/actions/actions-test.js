import C from './types';

// Action Creators
export function addValue(val){
  return {
    type: C.TEST_INCREMENT,
    payload: val
  };
}

export function subtractValue(val){
  return {
    type: C.TEST_DECREMENT,
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