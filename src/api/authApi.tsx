const BASE_URL = process.env.REACT_APP_BASE_URL
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL

export const redirectToGoogleOAuth = async () => {
    window.location.href = `${BASE_URL}/auth/google_oauth2?redirect_uri=${REDIRECT_URI}/login`
}