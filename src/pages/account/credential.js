
function Credential({user}) {
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
                        <div className="ui big inverted primary button">
                            <i className="edit icon"></i>
                            Edit
                        </div>
                    </div>
                </div>
                <div className="ui vertical divider">
                    Or
                </div>
            </div>
            
        </>
    )
}

export default Credential;