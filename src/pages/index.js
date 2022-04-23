import { useState } from "react"
import Navbar from "../components/navbar/navbar"
import Dev from "./dev/dev"
import Layout from "./layout"

export default function Index({dispatch}) {
    let [account,setAccount] = useState(false)
    let [github,setGithub] = useState(false)
    let [linkedin,setLinkedin] = useState(false)
    let [twitter,setTwitter] = useState(false)
    let [dev,setDev] = useState(false)

    return (
        <>
        <Navbar 
        setAccount={setAccount} 
        setGithub={setGithub}
        setLinkedin={setLinkedin} 
        setDev={setDev} 
        setTwitter={setTwitter}
        dispatch={dispatch}
        />
        <Layout 
        account={account}
        github={github}
        twitter={twitter}
        linkedin={linkedin}
        dev={dev}/>
        </>
    )
    
}