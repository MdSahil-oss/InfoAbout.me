
export const Alert = (props) => {
    return (
        <div id='error-message' class="ui message">
            <div class="header">
                {props.errorHeader}
            </div>
            <p>{props.errorMessage}</p>
        </div>
    )
}