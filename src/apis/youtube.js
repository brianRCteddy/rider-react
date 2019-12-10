import axios from 'axios';

const KEY = 'AIzaSyChx0MyG68WTcSLWndtTb-fUZJ6qmBI2eQ';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: 'snippet',
	maxResults: 5,
	key: KEY
});
