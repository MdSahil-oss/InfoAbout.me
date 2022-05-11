import Modal from "../../components/modal/modal";
import { useState,useEffect } from "react";
import CreadentialModal from './creadential-modal'

function Credential({user,userInfo,dispatch,dispatchInfo}) {
    let [mainEdit,setMainEdit] = useState(false)
    let manageModal = () => {
        let modal = document.getElementById('creadentialModal');
        if (mainEdit) {
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
    },[mainEdit]);


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
                        <div onClick={()=>{setMainEdit(true)}} className="ui big inverted primary button">
                            <i className="edit icon"></i>
                            Edit
                        </div>
                    </div>
                </div>
                <div className="ui vertical divider">
                    Or
                </div>
                <CreadentialModal user={user} userInfo={userInfo}
                 dispatch={dispatch} dispatchInfo={dispatchInfo} 
                 setMainEdit={setMainEdit} />
            </div>
            
        </>
    )
}

export default Credential;