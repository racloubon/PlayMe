import { combineReducers } from 'redux';

import {
  SET_SEARCH_RESULTS,
  SORT_SEARCH_RESULTS_BY_GENRE,
  SORT_SEARCH_RESULTS_BY_PRICE,
  SORT_SEARCH_RESULTS_BY_TRACKLENGTH,
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
    case SORT_SEARCH_RESULTS_BY_GENRE:
      return action.searchResults.sort((a,b) => a.primaryGenreName - b.primaryGenreName)
    case SORT_SEARCH_RESULTS_BY_PRICE:
      return action.searchResults.sort((a,b) => a.trackPrice*100 - b.trackPrice*100)
    case SORT_SEARCH_RESULTS_BY_TRACKLENGTH:
      return action.searchResults.sort((a,b) => a.trackTimeMillis - b.trackTimeMillis)
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
