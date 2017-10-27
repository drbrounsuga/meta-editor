// Action Types
export const AUTHOR_SELECTED = 'AUTHOR_SELECTED';

// ActionCreators
export function selectAuthor(author){
  return {
    type: AUTHOR_SELECTED,
    payload: author
  };
}