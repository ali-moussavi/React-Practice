import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID 16a856c75b47a1ebc409bf5e2e6f6fff9e53c7d00b489b196f90f6ed16dfcdad'
	}
});
