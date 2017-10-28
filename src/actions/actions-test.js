import C from '../constants';

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