import './modal.css'
import api from '../../api/api'

function Modal({ credentialName,handlerName}) {
    let handleCancel = () => {
        let modal = document.getElementById('modal')
        document.body.classList.remove('dimmed')
        modal.classList.remove('active')
        modal.classList.remove('visible')
    }
    
    return (
        <>
            <div id="modal" class="ui tiny modal test scrolling transition">
                <i class="close icon" onClick={handleCancel}></i>
                <div class="header">
                    {"Changing " + credentialName}
                </div>
                <div class="content">
                    <div class="description">
                        <p>Are you sure? You want to change your <b>{credentialName}</b>.</p>
                        <p>We Need your <b>password</b> for authentication.</p>
                        <div class="ui input">
                            <input type="password" placeholder="Password"/>
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <div onClick={handleCancel} class="ui black deny button">
                        Cancel
                    </div>
                    <div onClick={handlerName} class="ui blue right labeled icon button">
                        Confirm
                        <i class="checkmark icon"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;