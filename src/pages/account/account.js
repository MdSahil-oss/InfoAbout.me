import Credential from "./credential";
import UserInfo from "./user-info";

function Account({ user, userInfo, dispatch, dispatchInfo }) {
    // console.log(userInfo)
    
    return (
        <>
            <div className="container ">
                <h1>Welcome</h1>
                <p>here you get your account details</p>
                {/* <h2 className="ui icon header">
                    <i className="settings icon"></i>
                    <div className="content container">
                        Account Settings
                    </div>
                    <div className="sub header">Manage your account settings and set your data as per your preference.</div>
                </h2> */}
                <Credential user={user} userInfo={userInfo} dispatchInfo={dispatchInfo} dispatch={dispatch}/>
                <UserInfo user={user} userInfo={userInfo} dispatchInfo={dispatchInfo} dispatch={dispatch} />
                <p className="pb-fit"><b>To edit</b> any credential click on the edit icon of the credential then
                    enter new value to set.
                </p>
            </div>
        </>
    )
}

export default Account;