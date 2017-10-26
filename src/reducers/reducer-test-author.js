// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = { name: "LaVaughn Haynes" }, action){
  switch(action.type){
    case 'AUTHOR_SELECTED':
      return action.payload;

    default:
      return state;
  }
}