import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID df39419b935c69dd541f9c3b75b3d5940a05a3acc9e5605cbaede0e7b29fb807'
	}
});
