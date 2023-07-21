import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocation } from '../api/location';
import { useIntervalCheck } from './useIntervalCheck';

export const LocationAccessChecker = ({ children }) => {
    const navigate = useNavigate();
    const [hasAccess, setHasAccess] = useState(false);

    const checkLocationAndLogin = () => {
        getLocation()
            .then(() => {
                if (sessionStorage.getItem('token')) {
                    setHasAccess(true);
                } else {
                    navigate('/login');
                }
            })
            .catch(() => navigate('/'));
    };

    useIntervalCheck(checkLocationAndLogin, 20000);

    return hasAccess ? children : null;
};



