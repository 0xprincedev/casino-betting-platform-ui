export const setUserToLocalStorage = (
	token: string,
	username: string,
	email: string,
	role: Role
) => {
	localStorage.setItem('token', token)
	localStorage.setItem('username', username)
	localStorage.setItem('email', email)
	localStorage.setItem('role', role)
}

export const removeUserFromLocalStorage = () => {
	localStorage.removeItem('token')
	localStorage.removeItem('email')
	localStorage.removeItem('username')
	localStorage.removeItem('role')
}

export const shortenAddress = (address: string | undefined) => {
	if (address) {
		return address.slice(0, 5) + '...' + address.slice(-4)
	}
	return ''
}
