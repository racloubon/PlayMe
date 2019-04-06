import { combineReducers } from 'redux';

import {
  SET_SEARCH_RESULTS
} from './actions';

const initialState = {
  searchResults: [],
}

const search = (state = initialState.searchResults, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return [...state, action.searchResults]
    default:
      return state;
  }
}

const reducer = combineReducers({
  search
});

export default reducer;
