import api from "../../api/api";
import { updateDocument } from "./common-functions";
import { FetchState } from "../../hooks";

export const updateManager = async (userInfo, credentialName, dispatch, dispatchInfo,
     credential, secretMatched, setEdit) => {

    if (secretMatched) {
        let data = {
            Name: userInfo["Name"],
            UserId: userInfo["UserId"],
            Email: userInfo["Email"],
            Mobile: userInfo["Mobile"],
            Country: userInfo["Country"],
            Secret: userInfo["Secret"]
        }

        if (credentialName.toLowerCase() === "name") {
            data["Name"] = credential;
            try {
                await api.updateName(credential);
                try {
                    dispatch({ type: FetchState.FETCH_INIT });
                    const data = await api.getAccount();
                    dispatch({ type: FetchState.FETCH_SUCCESS, payload: data });
                } catch {
                    console.log('Error Occured in fetching Account Data')
                }
                updateDocument(data,dispatchInfo)
                setEdit(false)
            } catch {
                console.log("Error Occured in updating Name of User")
            }
        }
        else if (credentialName.toLowerCase() === "mobile number") {
            data["Mobile"] = credential;
            try {
                updateDocument(data,dispatchInfo)
                setEdit(false)
            } catch {
                console.log("Error Occured in updating Mobile Number of User")
            }
        }
        else if (credentialName.toLowerCase() === "country") {
            // console.log(newCountry)
            data["Country"] = credential;
            try {
                updateDocument(data,dispatchInfo)
                setEdit(false)
            } catch {
                console.log("Error Occured in updating Country of User")
            }
        }
        else if (credentialName.toLowerCase() === "email") {
            // console.log(newCountry)
            data["Email"] = credential;
            try {
                await api.updateEmail(credential,userInfo["Secret"]);
                try {
                    dispatch({ type: FetchState.FETCH_INIT });
                    const data = await api.getAccount();
                    dispatch({ type: FetchState.FETCH_SUCCESS, payload: data });
                } catch {
                    console.log('Error Occured in fetching Account Data')
                }
                updateDocument(data,dispatchInfo)
                setEdit(false)
            } catch {
                console.log("Error Occured in updating email of User")
            }
        }
        else if (credentialName.toLowerCase() === "password") {
            // console.log(newCountry)
            let oldPassword = data["Secret"]
            data["Secret"] = credential;
            try {
                await api.updatePassword(credential,oldPassword);
                try {
                    dispatch({ type: FetchState.FETCH_INIT });
                    const data = await api.getAccount();
                    dispatch({ type: FetchState.FETCH_SUCCESS, payload: data });
                } catch {
                    console.log('Error Occured in fetching Account Data')
                }
                updateDocument(data,dispatchInfo)
                setEdit(false)
            } catch(e) {
                console.log(e)
            }
        }
    } else {
        alert("wrong Password")
    }
}