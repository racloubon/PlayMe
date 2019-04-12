export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const SORT_SEARCH_RESULTS_BY_GENRE_ASCENDING = "SORT_SEARCH_RESULTS_BY_GENRE_ASCENDING";
export const SORT_SEARCH_RESULTS_BY_GENRE_DESCENDING = "SORT_SEARCH_RESULTS_BY_GENRE_DESCENDING";
export const SORT_SEARCH_RESULTS_BY_PRICE_ASCENDING = "SORT_SEARCH_RESULTS_BY_PRICE_ASCENDING";
export const SORT_SEARCH_RESULTS_BY_PRICE_DESCENDING = "SORT_SEARCH_RESULTS_BY_PRICE_DESCENDING";
export const SORT_SEARCH_RESULTS_BY_TRACKLENGTH_ASCENDING = "SORT_SEARCH_RESULTS_BY_TRACKLENGTH_ASCENDING";
export const SORT_SEARCH_RESULTS_BY_TRACKLENGTH_DESCENDING = "SORT_SEARCH_RESULTS_BY_TRACKLENGTH_DESCENDING";
export const SET_SELECTED_SONG = "SET_SELECTED_SONG";

export const setSearchResults = searchResults => ({
  type: SET_SEARCH_RESULTS,
  searchResults: searchResults
});

export const sortSearchResultsByGenreAscending = searchResults => ({
  type: SORT_SEARCH_RESULTS_BY_GENRE_ASCENDING,
  searchResults: searchResults
})

export const sortSearchResultsByGenreDescending = searchResults => ({
  type: SORT_SEARCH_RESULTS_BY_GENRE_DESCENDING,
  searchResults: searchResults
})

export const sortSearchResultsByPriceAscending = searchResults => ({
  type: SORT_SEARCH_RESULTS_BY_PRICE_ASCENDING,
  searchResults: searchResults
})

export const sortSearchResultsByPriceDescending = searchResults => ({
  type: SORT_SEARCH_RESULTS_BY_PRICE_DESCENDING,
  searchResults: searchResults
})

export const sortSearchResultsByTracklengthAscending = searchResults => ({
  type: SORT_SEARCH_RESULTS_BY_TRACKLENGTH_ASCENDING,
  searchResults: searchResults
})

export const sortSearchResultsByTracklengthDescending = searchResults => ({
  type: SORT_SEARCH_RESULTS_BY_TRACKLENGTH_DESCENDING,
  searchResults: searchResults
})

export const setSelectedSong = selectedSong => ({
  type: SET_SELECTED_SONG,
  selectedSong: selectedSong
});
