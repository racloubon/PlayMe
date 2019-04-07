import { combineReducers } from 'redux';

import {
  SET_SEARCH_RESULTS,
  SET_SELECTED_SONG
} from './actions';

const initialState = {
  searchResults: [],
  selectedSong: {}
}

const searchResults = (state = initialState.searchResults, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return action.searchResults.results
    default:
      return state;
  }
}

const selectedSong = (state = initialState.selectedSong, action) => {
  switch (action.type) {
    case SET_SELECTED_SONG:
      return action.selectedSong
    default:
      return state;
  }
}

const reducer = combineReducers({
  searchResults,
  selectedSong
});

export default reducer;
