import Modal from "../../components/modal/modal";
import api from '../../api/api'
import { useState,useEffect } from "react";
import {FetchState} from '../../hooks/index'
import {Server} from '../../utils/config'
import {updateManager} from './updateManager'
import UserInfoPasswordInput from './user-info-password-input'
import {handleSubmit} from './common-functions'


let UserInfoModal = ({ credentialName, newName, newMobile,
     newCountry, userInfo, dispatch, dispatchInfo, setEdit }) => {
    
    let [secretMatched,setSecretMatched] = useState(false)
    let newCreadential = '';
    
    let [updateData,setUpdateData] = useState(false)

    let runHandleSubmit = () => {
        handleSubmit(credentialName, userInfo, dispatch,
            dispatchInfo, secretMatched, setEdit, newName ,newMobile ,newCountry);
    }

    return (
        <>
            <Modal credentialName={credentialName}
            setEdit={setEdit}
            Description={UserInfoPasswordInput}
            handleSubmit={runHandleSubmit}
            userInfo={userInfo}
            secretMatched={secretMatched}
            setSecretMatched={setSecretMatched}
            />
        </>
    )
}

export default UserInfoModal;

// credentialName,userInfo,secretMatched,setSecretMatched