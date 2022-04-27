import Modal from "../../components/modal/modal";
import { useState,useEffect } from "react";

function Credential({user}) {
    let [edit,setEdit] = useState(false)
    let modal = document.getElementById('modal');
    let manageModal = () => {
        if (edit) {
            document.body.classList.add("dimmed")
            modal.classList.add('visible')
            modal.classList.add('active')
        }
        else {
            document.body.classList.remove('dimmed')
            modal.classList.remove('active')
            modal.classList.remove('visible')
        }
    }
    useEffect(()=>{
        manageModal()
    },[edit]);

    let updateCredential = () => {
        console.log("Updating Creadential");
    }

    return (
        <>
            <div className="ui placeholder segment">
                <div className="ui two column very relaxed stackable grid">
                    <div className="column">
                        <div className="ui form">
                            <div className="field">
                                <label>Username</label>
                                <div className="ui left icon input">
                                    <input value={user["$id"]} type="text" placeholder="Username" disabled />
                                    <i className="user icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <div className="ui left icon input">
                                    <input value={user["email"]} type="text" placeholder="Email" disabled />
                                    <i className="mail icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <div className="ui left icon input">
                                    <input value="Shhh! Super Secret" type="text" disabled />
                                    <i className="lock icon"></i>
                                </div>
                            </div>
                            {/* <div className="ui blue submit button">Login</div> */}
                        </div>
                    </div>
                    <div className="middle aligned column">
                        <div onClick={(e)=>{setEdit(true)}} className="ui big inverted primary button">
                            <i className="edit icon"></i>
                            Edit
                        </div>
                    </div>
                </div>
                <div className="ui vertical divider">
                    Or
                </div>
                <Modal credentialName="Credentials" Description="Description"
                updateData={updateCredential} setEdit={setEdit}/>
            </div>
            
        </>
    )
}

export default Credential;