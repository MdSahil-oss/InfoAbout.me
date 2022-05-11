import './login.css'
import { useState } from 'react';
import Register from '../register/register';
import { FetchState } from '../../hooks';
import api from '../../api/api';
import { Alert } from '../../components/alert/alert';
import { Server } from '../../utils/config';

function Login({ dispatch,dispatchInfo }) {
    let [showError, setShowError] = useState();
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [register, setRegister] = useState(false)

    let handleLogin = async (e) => {
        e.target.classList.add('loading')
        e.preventDefault();
        setShowError();
        dispatch({ type: FetchState.FETCH_INIT });
        try {
            await api.createSession(email, password);
            const data = await api.getAccount();
            dispatch({ type: FetchState.FETCH_SUCCESS, payload: data });
            dispatchInfo({ type: FetchState.FETCH_INIT });
            let userInfo;
            try {
                userInfo = await api.listDocuments(Server.collectionID);
                dispatchInfo({ type: FetchState.FETCH_SUCCESS, payload: userInfo["documents"][0] });
                // console.log(userInfo["documents"][0])
            } catch (e) {
                dispatchInfo({ type: FetchState.FETCH_FAILURE })
            }

            
        } catch (e) {
            dispatch({ type: FetchState.FETCH_FAILURE });
            if (e.response.code == 401) {
                // console.log("Here")
                setShowError(<Alert
                    errorHeader='Invalid Credential'
                    errorMessage='Error in Email or Password'
                />)
            }
            else if (e.response.code == 429) {
                setShowError(<Alert
                    errorHeader='Too Many Attempts'
                    errorMessage='You have tried for more than limit. Try after sometime'
                />)
            }
            else {
                setShowError(<Alert
                    errorHeader='Server Error'
                    errorMessage='Something went wrong'
                />)
            }
        }
        e.target.classList.remove('loading')
    };

    return register ? <Register setRegister={setRegister} dispatch={dispatch} /> : (
        <>
            <div id='errorContainer'>{showError}</div>
            
            <form onSubmit={handleLogin} className="ui form" id='login-container'>
                <h1>InfoAbout.me</h1>
                <div className="field">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Enter your Email Address" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Enter your password" />
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" tabindex="0" />
                        <label>Let me logged in</label>
                    </div>
                </div>
                <button className="ui inverted green button" type="submit"
                    disabled={!email || !password}
                >Login</button>
                <a onClick={() => { setRegister(true) }} className="ui inverted primary button">Sign-up</a>
                <p><b> Don't have an account </b>Click on <b>sign up</b> button to create one.</p>

                <a href='/' className="right primary ui button" >
                    Go Back
                </a>
            </form>

        </>
    )
}

export default Login;