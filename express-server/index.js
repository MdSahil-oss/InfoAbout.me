import express from 'express';
import { Client, auth } from "twitter-api-sdk";
import keys from './config/keys.js'
import fetch from 'node-fetch';

// import dotenv from "dotenv";

const port = keys['BackEndPort'];

const app = express()


// ******************** Twitter APIs *************************


let loginData = {
    TwitterLogIn: false,
    LinkedInLogIn: false,
    DevLogIn: false,
    GithubLogIn: false
}

let userTwitterData;
let pagination_token;
let accessToken = undefined;

const authClient = new auth.OAuth2User({
    client_id: keys['ClientId'],
    client_secret: keys['ClientSecret'],
    callback: "http://127.0.0.1:4000/twitterCallback",
    scopes: ["tweet.read", "users.read", "offline.access"],
});

const client = new Client(authClient);

const STATE = "my-state";

app.get('/twitterLoginCheck', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    if (accessToken) {
        res.send({
            "status": 200,
            "statusText": "ok",
            "loggedIn": true
        })
    }
    else {
        res.send({
            "status": 404,
            "statusText": "Not Found",
            "loggedIn": false
        })
    }
})

app.get('/user', async (req, res) => {
    if (accessToken) {
        try {
            res.set('Access-Control-Allow-Origin', '*')
            let resp = await client.users.findMyUser()
            userTwitterData = resp["data"]
            // console.log(userTwitterData)
            res.send(userTwitterData)
        } catch (error) {
            console.log(error);
            res.redirect(`${keys['FrontEndPoint']}/twitterCallbackFail`);
        }
    } else {
        res.set('Access-Control-Allow-Origin', '*')
        res.send({ "data": { id: "NA", name: "NA", username: "NA" } })
    }
})

app.get("/twitterCallback", async function (req, res) {
    try {
        const { code, state } = req.query;
        if (state !== STATE) return res.status(500).send("State isn't matching");
        accessToken = await authClient.requestAccessToken(code.toString());
        if (accessToken) {
            loginData["TwitterLogIn"] = true;
            // api.updateDocument(keys["usersLogins"],)
        }
        res.redirect(`${keys['FrontEndPoint']}/twitterCallback`);
    } catch (error) {
        console.log(error);
        res.redirect(`${keys['FrontEndPoint']}/twitterCallbackFail`);
    }
});

app.get("/twitterLogin", async function (req, res) {
    const authUrl = authClient.generateAuthURL({
        state: STATE,
        code_challenge_method: "plain",
        code_challenge: "test",
    });
    res.redirect(authUrl);
});

app.get("/tweets", async function (req, res) {
    try {
        const tweets = await client.tweets.usersIdTweets(userTwitterData['id'], { 'pagination_token': req.query.pagination_token });
        // pagination_token = tweets['meta']['next_token']
        res.set('Access-Control-Allow-Origin', '*')
        res.send(tweets);
        // console.log(tweets)
    } catch (error) {
        console.log("tweets error", error);
    }
});

app.get("/twitterRevoke", async function (req, res) {
    try {
        const response = await authClient.revokeAccessToken();
        accessToken = undefined
        res.send(response);
    } catch (error) {
        console.log(error);
    }
});



// ******************Dev API*******************************

let getDevUser = async () => {
    let resp = await fetch('https://dev.to/api/users/me', {
        method: 'GET',
        headers: {
            'api-key': 'hNSPWoaF6R9x5WyAkkepQ7Tb',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        mode: 'no-cors'
    });
    return resp;
}

app.get('/dev', async (req, res) => {
    // console.log(req.query.API_key)
    let resp = await fetch('https://dev.to/api/users/me', {
        method: 'GET',
        headers: {
            'api-key': req.query.API_key
        },
    }).then(resp => resp.json()).then(jsonData => {
        res.set('Access-Control-Allow-Origin', '*')
        res.send(jsonData)
    }).catch((err) => {
        console.log(err)
    })
    // console.log(resp)
})

app.get('/dev', async (req, res) => {
    // console.log(req.query.API_key)
    let resp = await fetch('https://dev.to/api/users/me', {
        method: 'GET',
        headers: {
            'api-key': req.query.API_key
        },
    }).then(resp => resp.json()).then(jsonData => {
        res.set('Access-Control-Allow-Origin', '*')
        res.send(jsonData)
    }).catch((err) => {
        console.log(err)
    })
    // console.log(resp)
})

app.get('/dev/articles', async (req, res) => {
    // console.log(req.query.page)
    let resp = await fetch(`https://dev.to/api/articles/me?${req.query.page}`, {
        method: 'GET',
        headers: {
            'api-key': req.query.API_key
        },
    }).then(resp => resp.json()).then(jsonData => {
        res.set('Access-Control-Allow-Origin', '*')
        res.send(jsonData)
    }).catch((err) => {
        console.log(err)
    })
    // console.log(resp)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})