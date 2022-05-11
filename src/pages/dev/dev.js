import DevLanding from "./dev-landing";
import { useState, useEffect } from "react";
import { Server } from '../../utils/config'
import api from "../../api/api";
import DEVImage from '../../images/DEV.png'

let page = 1;
function Dev({ user }) {
    let [devPosts, setDevPosts] = useState(<div class="ui active inverted dimmer">
        <div class="ui medium text loader">Loading</div>
    </div>)
    let [DevAPI_key, setDevAPI_key] = useState()
    let [logIn, setLogIn] = useState(false)
    let [userDevInfo, setUserDevInfo] = useState({ "name": "Name", "userName": "UserName", "id": "ID" })


    let handleLogout = (e) => {
        e.target.classList.add('loading')
        // console.log("clicked on logout")
        setLogIn(false);
        api.deleteDocument(Server['devCredential'], user['$id'])
        setDevAPI_key(undefined)
        setTimeout(() => {
            e.target.classList.remove('loading')
        }, 1000)
    }

    let fetchPosts = () => {
        fetch(`${Server['APIsEndpoint']}/dev/articles?API_key=${DevAPI_key}&page=${page}`, {
            method: 'GET',
            mode: 'cors'
        }).then(resp => resp.json()).then(jsonData => {
            // console.log(jsonData)
            setDevPosts(jsonData.map((element) => {
                return (<div class="card">
                    <div class="content">
                        <div class="header">
                            {element["title"]}
                        </div>
                        <div class="meta">
                            {element["published_at"]}
                        </div>
                        <div class="description">
                            {element["description"]}
                        </div>
                    </div>
                    <div class="extra content">
                        <div class="ui">
                            <a target={'_blank'} href={element["url"]} class="ui basic green button">visit</a>
                        </div>
                    </div>
                </div>)
            }))
        }).catch((err) => {
            console.log(err)
        })
    }

    let fetchUserData = () => {
        fetch(`${Server['APIsEndpoint']}/dev?API_key=${DevAPI_key}`, {
            method: 'GET',
            mode: 'cors'
        }).then(resp => resp.json()).then(userData => {
            setUserDevInfo({
                "userName": userData["username"],
                "name": userData["name"],
                "id": userData["id"]
            });
        }).catch(err => {
            console.log(err, 'Error in fetching User Data')
        })
    }

    useEffect(() => {
        // write your code here to check whether user already signedIn in Dev or not
        // if signedIn so fetch API_key from database and set logIn true 
        // else set logIn false

        (api.listDocuments(Server['devCredential'])).then(resp => resp).then(jsonData => {
            // console.log(jsonData["documents"][0]["API_key"])
            if (jsonData["documents"][0]["API_key"] !== undefined && !DevAPI_key) {
                setDevAPI_key(jsonData["documents"][0]["API_key"])
            }
        }).catch(err => {
            // console.log(err,'couldn not fetch userLogins')
            return err + ' couldn not fetch userLogins';
        })

        if (DevAPI_key) {
            // console.log("loggedIn")
            // console.log(DevAPI_key)
            document.getElementById('footer-container').style.position = "static";

            fetchUserData()
            fetchPosts()
            setLogIn(true)
        }
        else {
            document.getElementById('footer-container').style.position = "absolute"
            // console.log("Not loggedIn")
            setLogIn(false)
        }
    }, [DevAPI_key])

    let handleNextPosts = (e) => {
        e.target.classList.add('loading')
        page++;
        // console.log(page)
        fetchPosts()
        setTimeout(() => {
            e.target.classList.remove('loading')
        }, 1000)
    }

    return (
        <>
            {logIn ?
                (<div className="container">
                    <div className="two-separated-components">
                        <div>
                            {/* <h1>Dev Page</h1> */}
                            <img src={DEVImage} alt="No Image" />
                            <p>Here, you get your own posts that you posted on <a href="https://dev.to/">Dev.to</a></p>
                            <p>Tweets are sorted by Most Recent first. </p>
                            <button onClick={handleLogout} id="twitter-logout-btn" className="ui inverted red button">Logout</button>
                        </div>
                        <div className="ui card">
                            <div className="content">
                                <div className="header">{userDevInfo["name"]}</div>
                                <div className="meta">name</div>
                            </div>
                            <div className="content">
                                <div className="header">{userDevInfo["userName"]}</div>
                                <div className="meta">user name</div>
                            </div>
                            <div className="content">
                                <div className="header">{userDevInfo["id"]}</div>
                                <div className="meta">id</div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div id="posts-container" class="ui cards mt-20">
                        {devPosts}
                    </div>
                    <button id="btn-mt-20" onClick={handleNextPosts} className="ui inverted primary button">Next</button>
                </div>)
                : <DevLanding user={user} setDevAPI_key={setDevAPI_key} setUserDevInfo={setUserDevInfo} />
            }

        </>
    )
}

export default Dev;