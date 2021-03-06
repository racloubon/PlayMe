import { combineReducers } from 'redux';

import {
  SET_SEARCH_RESULTS,
  SORT_SEARCH_RESULTS_BY_GENRE_ASCENDING,
  SORT_SEARCH_RESULTS_BY_GENRE_DESCENDING,
  SORT_SEARCH_RESULTS_BY_PRICE_ASCENDING,
  SORT_SEARCH_RESULTS_BY_PRICE_DESCENDING,
  SORT_SEARCH_RESULTS_BY_TRACKLENGTH_ASCENDING,
  SORT_SEARCH_RESULTS_BY_TRACKLENGTH_DESCENDING,
  SET_SELECTED_SONG
} from './actions';

const initialState = {
  searchResults: [],
  selectedSong: {}
}

const searchResults = (state = initialState.searchResults, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return action.searchResults.results.filter(song => song.kind === "song")
    case SORT_SEARCH_RESULTS_BY_PRICE_ASCENDING:
      return [...state].sort((a,b) => a.trackPrice*100 - b.trackPrice*100)
    case SORT_SEARCH_RESULTS_BY_PRICE_DESCENDING:
      return [...state].sort((a,b) => a.trackPrice*100 - b.trackPrice*100).reverse()
    case SORT_SEARCH_RESULTS_BY_GENRE_ASCENDING:
      return [...state].sort((a,b) => {
        const genreA = a.primaryGenreName.toLowerCase();
        const genreB = b.primaryGenreName.toLowerCase()
        return (genreA < genreB) ? -1 : (genreA > genreB) ? 1 : 0;
      })
    case SORT_SEARCH_RESULTS_BY_GENRE_DESCENDING:
    return [...state].sort((a,b) => {
      const genreA = a.primaryGenreName.toLowerCase();
      const genreB = b.primaryGenreName.toLowerCase()
      return (genreA > genreB) ? -1 : (genreA < genreB) ? 1 : 0;
    })
    case SORT_SEARCH_RESULTS_BY_TRACKLENGTH_ASCENDING:
      return [...state].sort((a,b) => a.trackTimeMillis - b.trackTimeMillis)
    case SORT_SEARCH_RESULTS_BY_TRACKLENGTH_DESCENDING:
      return [...state].sort((a,b) => a.trackTimeMillis - b.trackTimeMillis).reverse()
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
