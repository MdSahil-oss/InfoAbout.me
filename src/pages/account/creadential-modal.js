import { useState, useEffect } from 'react'
import Modal from '../../components/modal/modal'
import api from '../../api/api'
import { FetchState } from '../../hooks/index'
import { updateManager } from './updateManager'
import UserInfoPasswordInput from './user-info-password-input'
import { handleSubmit } from './common-functions'

let CredentialModal = ({ user, userInfo, setMainEdit, dispatch, dispatchInfo }) => {

    let modalPassword = document.getElementById('modalPassword')
    let [secret, setSecret] = useState()
    let [email, setEmail] = useState(user["email"]);
    let [userId, setUserId] = useState(user["$id"]);
    let [password, setPassword] = useState();
    let [enteredOldPassword, setEnteredOldPassword] = useState()
    let [secretMatched, setSecretMatched] = useState(false)
    let [editEmail, setEditEmail] = useState(false)
    let [editPassword, setEditPassword] = useState(false)
    let [edit, setEdit] = useState(false)
    let [credentialName, setCredentialName] = useState();
    
    let CredentailsInput = () => {

        let manageModal = () => {
            let modal = document.getElementById('credential-modal');
            if (edit) {
                // document.body.classList.add("dimmed")
                modal.classList.add('visible')
                modal.classList.add('active')
            }
            else {
                // document.body.classList.remove('dimmed')
                modal.classList.remove('active')
                modal.classList.remove('visible')
            }
        }

        useEffect(() => {
            manageModal()
            // setSecret(userInfo["Secret"])
        }, [edit]);

        let manageModalPassword = () => {
            secretMatched ? (modalPassword.classList.contains('error') && modalPassword.classList.remove('error')) :
                modalPassword.classList.add('error');
        }

        let verifyPassword = () => {
            setSecret(userInfo["Secret"])
            secret === enteredOldPassword ? setSecretMatched(true) : setSecretMatched(false);
            manageModalPassword()
            console.log(secretMatched)
        }

        return (
            <>
                <div>
                    <div id="" className="pb-fit">
                        <div className="container input-text" >
                            <p><b>UserID</b></p>
                        </div>
                        <div className="container container-spliter" >
                            <div className="field">
                                <div id="" className="ui big icon input">
                                    <input value={userId} disabled={true} type="text" />
                                    <i onClick={() => { }} className="link icon"></i>
                                </div>
                            </div>
                            <button className="ui inverted big blue button"
                                onClick={() => { }}
                                disabled={true}
                            >Confirm</button>
                        </div>
                    </div>
                    <div id="" className="pb-fit">
                        <div className="container input-text" >
                            <p><b>Email</b></p>
                        </div>
                        <div className="container container-spliter" >
                            <div className="field">
                                <div id="" className="ui big icon input">
                                    {console.log('Run')}
                                    <input value={email} onChange={(e) => {setEmail(e.target.value) }} disabled={!editEmail} type="email" />
                                    <i onClick={() => { setEditEmail(true) }} className="edit link icon"></i>
                                </div>
                            </div>
                            <button className="ui inverted big blue button"
                                onClick={() => { setCredentialName('Email'); setEdit(true) }}
                                disabled={!editEmail}
                            >Confirm</button>
                        </div>
                    </div>
                    <div id="" className="pb-fit">
                        <div className="container input-text" >
                            <p><b>Password</b></p>
                        </div>
                        <div className="container container-spliter" >
                            <div className="field">
                                <div id="" className="ui big icon input">
                                    <input onChange={(e) => { setPassword(e.target.value) }}
                                        value={password}
                                        placeholder="Enter New Password"
                                        disabled={!editPassword} type="password" />
                                    <i onClick={() => { setEditPassword(true) }} className="edit link icon"></i>
                                </div>
                            </div>
                            <button className="ui inverted big blue button"
                                onClick={() => { setCredentialName('Password'); setEdit(true) }}
                                disabled={!editPassword}
                            >Confirm</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    let runHandleSubmit = () => {
        handleSubmit(credentialName, userInfo, dispatch,
            dispatchInfo, secretMatched, setEdit, null,null,null,
            email,password);
    }

    useEffect(()=>{
        <CredentailsInput />
    },[edit])

    return (
        <>
            <div id='creadentialModal' className="ui modal">
                <i onClick={() => { setMainEdit(false) }} className="close icon"></i>
                <div className="header">
                    Editing Creadential
                </div>
                <div className="content">
                    <div className="description">
                        <CredentailsInput />
                    </div>
                </div>
                <div className="actions field">
                    <div onClick={() => { setMainEdit(false) }} className="item ui blue button">
                        Done
                        {/* <i className="checkmark icon"></i> */}
                    </div>
                </div>
                <Modal setEdit={setEdit} credentialName={credentialName}
                    Description={UserInfoPasswordInput}
                    userInfo={userInfo}
                    secretMatched={secretMatched}
                    setSecretMatched={setSecretMatched}
                    handleSubmit={runHandleSubmit} 
                    modalId="credential-modal"
                    />
            </div>
        </>
    )
}

export default CredentialModal;