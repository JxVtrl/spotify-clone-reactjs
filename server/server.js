const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.post('/login', (req, res) => { 
    const code = req.body.code;
    const spotifyApi =
        new SpotifyWebApi({
            redirectUri: 'http://localhost:3000',
            clientId: 'ecc4bdd558b64d3e95c2a98a7bb4efce',
            clientSecret: 'fc9cfd27b39e48f0abc8a813278f8131'
        })

    spotifyApi
        .authorizationCodeGrant(code)
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch(err => { 
            console.log(err);
            res.sendStatus(400)
        })
})

app.listen(3001)