const initialState = { name: "LaVaughn Haynes" };

// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = initialState, action){
  switch(action.type){
    case 'AUTHOR_SELECTED':
      return Object.assign({}, state, {name: action.payload});

    default:
      return state;
  }
}