export const getToken = () => {
	const token = localStorage.getItem("token")
	if (!token) return null
	console.log("token", token)
	let tokenData
	try {
		tokenData = JSON.parse(token)
	} catch (error) {
		console.error("Error parsing token JSON:", error)
		localStorage.removeItem("token")
		return null
	}

	if (tokenData.token && tokenData.expiration) {
		const now = new Date().getTime()
		if (now < tokenData.expiration) {
			return tokenData.token
		}
		localStorage.removeItem("token")
	}
	return null
}

export const setToken = (token: string) => {
	const now = new Date()
	const expiration = now.getTime() + 30 * 60 * 1000
	const tokenData = {
		token,
		expiration,
	}
	localStorage.setItem("token", JSON.stringify(tokenData))
}

export const removeToken = () => {
	localStorage.removeItem("token")
}
