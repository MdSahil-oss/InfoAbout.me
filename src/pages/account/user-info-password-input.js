import {useState} from 'react'

let UserInfoPasswordInput = ({credentialName,userInfo,secretMatched,setSecretMatched}) => {
    let modalPassword = document.getElementById('modalPassword')

    let [secret,setSecret] = useState(userInfo["Secret"])
    let [enteredPassword,setEnteredPassword] = useState()

    let manageModalPassword = () => {
        secretMatched ? (modalPassword.classList.contains('error') && modalPassword.classList.remove('error')) :
        modalPassword.classList.add('error');
    }
    
    let verifyPassword = () => {
        secret === enteredPassword ? setSecretMatched(true) : setSecretMatched(false) ;
        manageModalPassword()
        console.log(secretMatched)
    }

    return (
        <>
            <p>Are you sure? You want to change your <b>{credentialName}</b>.</p>
            <p>We Need your <b>password</b> for authentication.</p>
            <div id="modalPassword" class="ui input">
                <input onChange={(e)=>{setEnteredPassword(e.target.value);verifyPassword()}}
                 type="password" placeholder="Password" />
            </div>
        </>
    )
}

export default UserInfoPasswordInput;