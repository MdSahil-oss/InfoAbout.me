import { FetchState } from "../../hooks";
import api from "../../api/api";
import { Server } from "../../utils/config";
import { updateManager } from "./updateManager";


export const updateDocument = async (data, dispatchInfo) => {
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

export const handleSubmit = (credentialName,userInfo,dispatch,
    dispatchInfo,secretMatched,setEdit,newName=null,newMobile=null,
    newCountry=null,newEmail=null,newPassword=null) => {

    let newCreadential;

    credentialName.toLowerCase() === 'name' && (newCreadential = newName);
    credentialName.toLowerCase() === 'mobile number' && (newCreadential  = newMobile);
    credentialName.toLowerCase() === 'country' && (newCreadential = newCountry);
    credentialName.toLowerCase() === 'email' && (newCreadential = newEmail);
    credentialName.toLowerCase() === 'password' && (newCreadential = newPassword);
    
    // console.log(newCreadential)
    updateManager(userInfo,credentialName,
        dispatch,dispatchInfo,newCreadential,
        secretMatched,setEdit);
    
}