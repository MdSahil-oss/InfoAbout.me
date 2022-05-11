import { useState } from "react"
import Navbar from "../components/navbar/navbar"
import Layout from "./layout"
import Footer from "../components/footer/footer"


export default function Index({ dispatch, user, userInfo, dispatchInfo, page}) {
    let [account, setAccount] = useState(false)
    let [twitter, setTwitter] = useState(false)
    let [dev, setDev] = useState(false)

    return (
        <>
            <Navbar
                setAccount={setAccount}
                setDev={setDev}
                setTwitter={setTwitter}
                dispatch={dispatch}
                page={page}
            />

            <Layout
                account={account}
                twitter={twitter}
                dev={dev}
                user={user}
                userInfo={userInfo}
                dispatch={dispatch}
                dispatchInfo={dispatchInfo}
            />

            <Footer />
        </>
    )

}