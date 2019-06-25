import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'No Scrubs', Duration: '4:05' },
		{ title: 'Macarena', Duration: '2:30' },
		{ title: 'All star', Duration: '3:15' },
		{ title: 'I want it That Way', Duration: '1:56' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
