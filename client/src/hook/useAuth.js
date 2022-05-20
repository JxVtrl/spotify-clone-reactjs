import { useState, useEffect } from 'react';
import axios from 'axios';

export function useAuth(code) {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [expiresIn, setExpiresIn] = useState(null);

    useEffect(() => {
        axios
            .post('http://localhost:3001/login', {
                code
            })
            .then(res => { 
                console.log(res.data);
            })
            .catch(() => {
                window.location = '/'
            })

    }, [code]);
  
}

