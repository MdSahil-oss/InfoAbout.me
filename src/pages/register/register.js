import { ReactDOM } from 'react';
import api from '../../api/api';
import './register.css'
import countries from './countries';
import { useState } from 'react'
import { FetchState, useGetUser } from "../../hooks";
import { Alert } from '../../components/alert/alert';
import { Server } from '../../utils/config';

function Register({ setRegister,dispatch }) {
    let [showError, setShowError] = useState();
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [userName, setUserName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
    let [country, setCountry] = useState('')
    let [mobileNumber, setMobileNumber] = useState('')


    const HandleSignUp = async (e) => {
        e.target.classList.add('loading')
        e.preventDefault();
        setShowError()
        //Regular Expression
        let checkName = /[a-zA-Z]{2,20}/
        let checkUserName = /^([a-zA-Z]{1,20})/
        let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let checkMobile = /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/
        let checkPassword = /(?=.{8,})/


        if (!checkName.test(firstName + lastName) || !checkUserName.test(userName)
            || !checkEmail.test(email) || !checkPassword.test(password)
            || !checkMobile.test(mobileNumber) || country === 'NA') {
            let errorIn = '';
            if (!checkName.test(firstName + lastName)) {
                errorIn += 'NAME '
            }
            if (!checkUserName.test(userName)) {
                errorIn += 'USERNAME '
            }
            if (!checkEmail.test(email)) {
                errorIn += 'EMAIL '
            }
            if (!checkPassword.test(password)) {
                errorIn += 'PASSWORD '
            }
            if (!checkMobile.test(mobileNumber)) {
                errorIn += 'MOBILE NUMBER '
            }
            if (country === 'NA') {
                errorIn += 'COUNTRY'
            }
            setShowError(<Alert
                errorHeader='Credential Error'
                errorMessage={`Error In ${errorIn}.`}
            />)
        }
        else if (password != confirmPassword) {
            setShowError(<Alert
                errorHeader='Password Error'
                errorMessage='Password does not match.'
            />)
        }
        else {
            dispatch({ type: FetchState.FETCH_INIT });
            let data = {
                Name : firstName + ' ' + lastName,
                UserId : userName,
                Email : email,
                Country : country,
                Mobile : mobileNumber
            }
            try {
                const user = await api.createAccount(userName, email, password, firstName + ' ' + lastName);
                dispatch({ type: FetchState.FETCH_SUCCESS, payload: user });
                await api.createSession(email, password);
                setFirstName('');
                setLastName('');
                setUserName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setCountry('');
                setMobileNumber('');
                console.log(user)
                api.createDocument(
                    Server.collectionID,
                    data,
                    [`user:${user["$id"]}`],
                    [`user:${user["$id"]}`]
                    )
                console.log('Done! document creation')
            } catch (e) {
                dispatch({ type: FetchState.FETCH_FAILURE });
                console.log(e.response)
                e.response.code == 409 && setShowError(<Alert
                    errorHeader='User Already Exist'
                    errorMessage='You cannot sign-up because user already exist.'
                />)
                
            }
        }
        e.target.classList.remove('loading')
    }

    return (
        <>
            <div id='errorContainer'>{showError}</div>
            <form onSubmit={HandleSignUp} id='register-container' className="ui equal width form">
                <h1>Fill the form to sign up for InfoAbout.me</h1>
                <div className="fields">
                    <div className="field">
                        <label>First name</label>
                        <input type="text" id='firstName' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} placeholder="First Name" />
                    </div>
                    <div className="field">
                        <label>Last name</label>
                        <input type="text" id='lastName' value={lastName} onChange={(e) => { setLastName(e.target.value) }} placeholder="Last Name" />
                    </div>
                </div>
                <div className="fields">
                    <div className="field">
                        <label>Username</label>
                        <input type="text" id='userName' value={userName} onChange={(e) => { setUserName(e.target.value) }} placeholder="Username" />
                    </div>
                </div>
                <div className="fields">
                    <div className="field">
                        <label>Email</label>
                        <input type="email" id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    </div>
                </div>
                <div className="fields">
                    <div className="field">
                        <label>Set Password</label>
                        <input type="password" value={password} id='setPassword' onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Password" />
                    </div>
                    <div className="field">
                        <label>Confirm Password</label>
                        <input type="password" value={confirmPassword} id='confirmPassword' onChange={(e) => { setConfirmPassword(e.target.value) }} placeholder="Enter Password" />
                    </div>
                </div>
                <div className="fields">
                    <div className="field">
                        <label>Country</label>
                        <select id='country' value={country} onChange={(e) => { setCountry(e.target.value) }} className="ui fluid dropdown">
                            {
                                countries.map((country) => {
                                    return (
                                        <option value={country.code}>{country.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="field">
                        <label>Mobile Number</label>
                        <input type="text" value={mobileNumber} id='mobileNumber' onChange={(e) => { setMobileNumber(e.target.value) }} placeholder='Mobile Number' />
                    </div>
                </div>
                <button className="ui inverted green button" type="submit"
                    disabled={!(firstName + lastName) ||
                        !userName || !email ||
                        !password || !confirmPassword ||
                        !mobileNumber || !country
                    }
                >Register</button>
                <a onClick={() => { setRegister(false) }} className="ui inverted primary button">Sign-in</a>
                <p><b>Already having an account</b> click on <b>sign in</b> button</p>
                <a href='/' className="right primary ui button" >
                    Go Back
                </a>
            </form>
        </>
    )
}

export default Register;