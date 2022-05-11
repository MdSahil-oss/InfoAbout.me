import './modal.css'
import api from '../../api/api'

// credentialName,userInfo,secretMatched,setSecretMatched

function Modal({ credentialName, handleSubmit, Description, setEdit,
    userInfo, secretMatched, setSecretMatched, modalId }) {
        
    return (
        <>
            <div id={modalId} className="ui tiny modal test scrolling transition">
                <i className="close icon" onClick={() => { setEdit(false) }}></i>
                <div className="header">
                    {"Changing " + credentialName}
                </div>
                <div className="content">
                    <div className="description">
                        <Description credentialName={credentialName} userInfo={userInfo}
                            secretMatched={secretMatched} setSecretMatched={setSecretMatched} />
                    </div>
                </div>
                <div className="actions">
                    <div onClick={() => { setEdit(false) }} className="ui black deny button">
                        Cancel
                    </div>
                    <div onClick={handleSubmit} className="ui blue right labeled icon button">
                        Confirm
                        <i className="checkmark icon"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;