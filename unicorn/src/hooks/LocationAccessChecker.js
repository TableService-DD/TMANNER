import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocation } from '../api/location';

export const LocationAccessChecker = ({ children }) => {
    const navigate = useNavigate();
    const [hasAccess, setHasAccess] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (!token) {
            navigate('/login');
        } else {
            getLocation()
                .then(() => setHasAccess(true))
                .catch(() => navigate('/'));
        }
    }, [navigate]);

    return hasAccess ? children : null;
};
