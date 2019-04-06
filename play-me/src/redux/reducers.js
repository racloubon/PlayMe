import { combineReducers } from 'redux';

import {
  SET_SEARCH_RESULTS
} from './actions';

const initialState = {
  searchResults: [],
}

const searchResults = (state = initialState.searchResults, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return action.searchResults.results
    default:
      return state;
  }
}

const reducer = combineReducers({
  searchResults,
});

export default reducer;
