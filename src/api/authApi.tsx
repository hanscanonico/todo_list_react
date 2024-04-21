const BASE_URL = process.env.REACT_APP_BASE_URL

export const redirectToGoogleOAuth = async () => {
    window.location.href = `${BASE_URL}/auth/google_oauth2?redirect_uri=http://localhost:3030/login`
}