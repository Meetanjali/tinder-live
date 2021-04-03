import axios from 'axios';

const instance = axios.create({
	basrUrl: 'http://localhost:8001',
});
export default instance;
