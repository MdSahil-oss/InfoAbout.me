import './modal.css'
import api from '../../api/api'


function Modal({ credentialName,updateData,Description,setEdit}) {
        
    return (
        <>
            <div id="modal" class="ui tiny modal test scrolling transition">
                <i class="close icon" onClick={()=>{setEdit(false)}}></i>
                <div class="header">
                    {"Changing " + credentialName}
                </div>
                <div class="content">
                    <div class="description">
                        <Description credentialName={credentialName} />
                    </div>
                </div>
                <div class="actions">
                    <div onClick={()=>{setEdit(false)}} class="ui black deny button">
                        Cancel
                    </div>
                    <div onClick={updateData} class="ui blue right labeled icon button">
                        Confirm
                        <i class="checkmark icon"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;