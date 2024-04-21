interface Props {
    onClick: () => void
}

function GoogleButton({ onClick }: Props) {

    return (
        <button onClick={onClick} type="button" className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Se connecter avec
            <img src="google_icon.png" alt="Google button" className="w-6 h-6 ml-2" />
        </button>
    )

}


export default GoogleButton;