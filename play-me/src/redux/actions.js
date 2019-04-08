export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const SORT_SEARCH_RESULTS_BY_GENRE = "SORT_SEARCH_RESULTS_BY_GENRE";
export const SORT_SEARCH_RESULTS_BY_PRICE = "SORT_SEARCH_RESULTS_BY_PRICE";
export const SORT_SEARCH_RESULTS_BY_TRACKLENGTH = "SORT_SEARCH_RESULTS_BY_TRACKLENGTH";
export const SET_SELECTED_SONG = "SET_SELECTED_SONG";

export const setSearchResults = searchResults => ({
  type: SET_SEARCH_RESULTS,
  searchResults: searchResults
});

export const sortSearchResultsByGenre = searchResults => ({
  type: SORT_SEARCH_RESULTS_BY_GENRE,
  searchResults: searchResults
})

export const sortSearchResultsByPrice = searchResults => ({
  type: SORT_SEARCH_RESULTS_BY_PRICE,
  searchResults: searchResults
})

export const sortSearchResultsByTracklength = searchResults => ({
  type: SORT_SEARCH_RESULTS_BY_TRACKLENGTH,
  searchResults: searchResults
})

export const setSelectedSong = selectedSong => ({
  type: SET_SELECTED_SONG,
  selectedSong: selectedSong
});
