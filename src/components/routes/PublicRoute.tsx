import type React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


interface PublicRouteProps {
    Component: React.ComponentType
}


const PublicRoute: React.FC<PublicRouteProps> = ({ Component }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token, navigate])

    return <Component />;
}

export default PublicRoute;
