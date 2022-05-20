import React from 'react';

import { Container } from 'react-bootstrap';

const CLIENT_ID = 'ecc4bdd558b64d3e95c2a98a7bb4efce'
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export function Login() {
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100vh' }}
        >
            <a
                className='btn btn-success btn-lg'
                href={AUTH_URL}
            >
                Login with Spotify
            </a>
        </Container>
    );
}
