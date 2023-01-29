import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:7000/api/',
})

export const setAuthToken = (token: string | undefined) => {
	if (token) {
		instance.defaults.headers.common['Authorization'] = token
	} else {
		delete instance.defaults.headers.common['Authorization']
	}
}

export default instance
