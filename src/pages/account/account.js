import Credential from "./credential";
import UserInfo from "./user-info";

function Account({user,userInfo}) {
    // console.log(userInfo)
    return (
        <>
            <div className="container">
                <h1>Welcome</h1>
                <p>here you get your account details</p>
                <Credential user={user} />
                <UserInfo user={user} userInfo={userInfo}/> 
                <p className="pb-fit"><b>To edit</b> any credential click on the edit icon of the credential then 
                    enter new value to set.
                </p>
            </div>
        </>
    )
}

export default Account;