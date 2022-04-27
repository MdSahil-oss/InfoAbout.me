import Modal from "../../components/modal/modal";
import api from '../../api/api'
import { useState } from "react";
import {FetchState} from '../../hooks/index'
import {Server} from '../../utils/config'


let UserInfoModal = ({ credentialName, newName, newMobile,
     newCountry, userInfo, dispatch, dispatchInfo, setEdit }) => {
    
    let [secretMatched,setSecretMatched] = useState(false)
    

    let removeModal = () => {
        let modal = document.getElementById('modal')
        document.body.classList.remove('dimmed')
        modal.classList.remove('active')
        modal.classList.remove('visible')
    }

    let UserInfoPasswordInput = ({credentialName}) => {
        let modalPassword = document.getElementById('modalPassword')

        let [secret,setSecret] = useState(userInfo["Secret"])
        let [enteredPassword,setEnteredPassword] = useState()

        let manageModalPassword = () => {
            
            secretMatched ? (modalPassword.classList.contains('error') && modalPassword.classList.remove('error')) :
            modalPassword.classList.add('error');
        }
        
        let verifyPassword = () => {
            // secret == null && setSecret('')

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
    
    let updateDocument = async (data) => {
        try {
            api.updateDocument(Server.collectionID,data["UserId"],data,[`user:${data["UserId"]}`],
            [`user:${data["UserId"]}`]);
            dispatchInfo({ type: FetchState.FETCH_INIT });
            try {
                const userInfo = await api.listDocuments(Server.collectionID);
                dispatchInfo({ type: FetchState.FETCH_SUCCESS, payload: userInfo["documents"][0] });
            } catch (e) {
                dispatchInfo({ type: FetchState.FETCH_FAILURE })
                console.log('Error Occurred in fetching documents')
            }

        } catch {
            console.log('Document could not be updated.');
        }
    }
    let handleUserInfoUpdate =async () => {
        
        if(!secretMatched){
            let data = {
                Name:   userInfo["Name"],
                UserId: userInfo["UserId"],
                Email: userInfo["Email"],
                Mobile: userInfo["Mobile"],
                Country: userInfo["Country"],
                Secret: userInfo["Secret"]
            }

            if(credentialName.toLowerCase() === "name") {
                data["Name"] = newName;
                try {
                    await api.updateName(newName);
                    try {
                        dispatch({ type: FetchState.FETCH_INIT });
                        const data = await api.getAccount();
                        dispatch({ type: FetchState.FETCH_SUCCESS, payload: data }); 
                    }catch {
                        console.log('Error Occured in fetching Account Data')
                    }
                    updateDocument(data)
                    removeModal()
                }catch {
                    console.log("Error Occured in updating Name of User")
                }
            }
            else if(credentialName.toLowerCase() === "mobile number") {
                data["Mobile"] = newMobile;
                try {
                    updateDocument(data)
                    removeModal()
                }catch {
                    console.log("Error Occured in updating Mobile Number of User")
                }
            }
            else if(credentialName.toLowerCase() === "country") {
                console.log(newCountry)
                data["Country"] = newCountry;
                try {
                    updateDocument(data)
                    removeModal()
                }catch {
                    console.log("Error Occured in updating Mobile Number of User")
                }
            }
        }else {
            alert("wrong Password")
        }
    }


    return (
        <>
            <Modal credentialName={credentialName} 
            updateData={handleUserInfoUpdate}
            Description={UserInfoPasswordInput}
            setEdit={setEdit}
            />
        </>
    )
}

export default UserInfoModal;