import Modal from "../../components/modal/modal";

let UserInfoModal = ({ credentialName, name, mobile, couontry}) => {

    let handleUserInfoUpdate = () => {
        credentialName.toLowerCase() === "name" && api.updateName(name)
    }

    return (
        
        <>
        <Modal credentialName={credentialName} handlerName={handleUserInfoUpdate}/>
        </>
    )
}

export default UserInfoModal;