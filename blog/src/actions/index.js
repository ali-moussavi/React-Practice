import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch) => {
	await dispatch(fetchPosts());
};

export const fetchPosts = () => {
	return async function(dispatch) {
		const response = await jsonPlaceholder.get('/posts');
		dispatch({ type: 'FETCH_POSTS', payload: response.data });
	};
};

export const fetchUser = (id) => {
	return async function(dispatch) {
		const response = await jsonPlaceholder.get(`/users/${id}`);
		dispatch({ type: 'FETCH_USER', payload: response.data });
	};
};
