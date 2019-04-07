export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const SET_SELECTED_SONG = "SET_SELECTED_SONG";

export const setSearchResults = searchResults => ({
  type: SET_SEARCH_RESULTS,
  searchResults: searchResults
});

export const setSelectedSong = selectedSong => ({
  type: SET_SELECTED_SONG,
  selectedSong: selectedSong
});
