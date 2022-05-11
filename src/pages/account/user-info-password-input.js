import {useState} from 'react'

let UserInfoPasswordInput = ({credentialName,userInfo,secretMatched,setSecretMatched}) => {
    let modalPassword = document.getElementById('modalPassword')

    let secret ;
    let enteredPassword = null;

    let manageModalPassword = () => {
        secret = userInfo["Secret"];
        secretMatched ? (modalPassword.classList.contains('error') && modalPassword.classList.remove('error'))
        :  modalPassword.classList.add('error');
    }
    
    let verifyPassword = () => {
        secret = userInfo["Secret"];
        secret === enteredPassword ? setSecretMatched(true) : setSecretMatched(false) ;
        manageModalPassword()
    }

    return (
        <>
            <p>Are you sure? You want to change your <b>{credentialName}</b>.</p>
            <p>We Need your <b>password</b> for authentication.</p>
            <div id="modalPassword" className="ui input">
                <input value={enteredPassword}
                 onChange={(e)=>{enteredPassword=e.target.value;verifyPassword()}}
                 type="password" placeholder="Password" />
            </div>
        </>
    )
}

export default UserInfoPasswordInput;