import {useEffect} from 'react'

let CredentailsInput = (edit,secretMatched,modalPassword,secret,enteredOldPassword,
    setSecretMatched,userId,email,setEmail,editEmail,setEditEmail,setCredentialName,setEdit,setPassword,password,
    editPassword,setEditPassword) => {

    let manageModal = () => {
        let modal = document.getElementById('credential-modal');
        if (edit) {
            // document.body.classList.add("dimmed")
            modal.classList.remove('active')
            modal.classList.remove('visible')
        }
        else {
            // document.body.classList.remove('dimmed')
            modal.classList.add('visible')
            modal.classList.add('active')
        }
    }

    useEffect(() => {
        manageModal()
    }, [edit]);

    let manageModalPassword = () => {
        secretMatched ? (modalPassword.classList.contains('error') && modalPassword.classList.remove('error')) :
            modalPassword.classList.add('error');
    }

    let verifyPassword = () => {
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
                                <input value={email} onChange={(e) => { setEmail(e.target.value) }} disabled={!editEmail} type="email" />
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

export default CredentailsInput;