import { useState } from "react"
import { Server } from '../../utils/config'
import api from "../../api/api";

export default function DevLanding({ user, setUserDevInfo, setDevAPI_key }) {

    let [API_key, setAPI_key] = useState();

    let saveDevCredential = () => {
        (api.createDocument(Server['devCredential'], user['$id'],
            { "API_key": API_key }, [`user:${user['$id']}`], [`user:${user['$id']}`])).then(resp => {
                console.log('Done Creation')
            }).catch(err => {
                console.log(err, "could not update userLogin");
            })
    }
    // console.log(user)
    let handleSubmit = () => {
        // console.log(API_key)
        let devLoginBtn = document.getElementById('dev-login-btn')
        devLoginBtn.classList.add('loading')
        fetch(`${Server['APIsEndpoint']}/dev?API_key=${API_key}`, {
            method: 'GET',
            mode: 'cors'
        }).then((resp) => resp.json()).then(userData => {
            let API_keyInput = document.getElementById('API_key-input')
            if (userData["status"] != undefined && (userData["status"].toString() == 401)) {
                API_keyInput.classList.add('error')
            }
            else {
                API_keyInput.classList.contains('error') && API_keyInput.classList.remove('error');
                console.log(userData)

                saveDevCredential()
                console.log('done Creation')

                setDevAPI_key(API_key)
            }
        }).catch((err) => {
            console.log(err, 'Unable to fetch userData')
        })
        setTimeout(() => {
            devLoginBtn.classList.remove('loading')
        }, 1000);
        // console.log(data)
        // setLogIn(true)
    }

    return (
        <div id='text-container' class="ui text container landing-Box">
            <h1 class="ui inverted header">
                Get Started with Dev with us
            </h1>
            <h2> To get Started with Dev you need an API key.</h2>
            <div>
                <div id="API_key-input" class="ui input focus">
                    <input id="API-key" onChange={(e) => { setAPI_key(e.currentTarget.value) }} type="text" placeholder="API key" />
                </div>
                <a id="dev-login-btn" onClick={handleSubmit} class="ui big primary button">Go <i class="right arrow icon"></i></a>
            </div>
            <p>
                <b>Don't have API key </b>
                <a target='_blank' href="https://developers.forem.com/api#section/Authentication">
                    follow instructions to get an API key.
                </a>
                <p>
                    Don't worry about API key you can revoke it after using this application for security purpose of your account.
                    We are using API key because &nbsp;
                    <a target='_blank' href="https://developers.forem.com/api#section/Authentication">
                        Dev.to  
                    </a>
                    &nbsp;does not provide Authorization like Twitter.
                </p>
            </p>
        </div>
    )
}