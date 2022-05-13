// import { fetchTweets } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Server } from "../../utils/config";
import TwitterLanding from "./twitter-landing";
import { revokeTwitter } from "./twitter-handler";
import TwitterImage from '../../images/Twitter.png'

function Twitter({user}) {
    let [pagination_token, setPagination_token] = useState('')
    let [logIn, setLogIn] = useState(false)
    let [tweetsBlocks, setTweetsBlocks] = useState(<div class="ui active inverted dimmer">
        <div class="ui medium text loader">Loading</div>
    </div>);
    let [userInfo, setUserInfo] = useState({ id: "ID", name: "Name", userName: "UserName" })
    // let [userTweets,setUserTweets] = useState({ data: [], meta: [] });

    let fetchTweets = () => {
        fetch(`${Server['APIsEndpoint']}/tweets?pagination_token=${pagination_token}`, {
            method: 'GET',
            mode: 'cors'
        }).then(resp => resp.json()).then(jsonData => {
            console.log(jsonData["data"])
            setPagination_token(jsonData["meta"]["next_token"])
            setTweetsBlocks(jsonData["data"].map((element) => {
                return (
                    <a className="red card container">
                        <div className="p-center">
                            <span className="t-c-r">tweet Id :- </span>
                            <span className="t-c-b">{element["id"]}</span>
                        </div>
                        <div className="p-center">
                            <span>Tweet</span>
                        </div>
                        <div className="p-center t-c-bl">
                            {element["text"]}
                        </div>
                    </a>
                )
            }))
        }).catch(err => {
            console.log(err, 'Error in fetching Tweets')
        })

    }

    const getUser = () => {

        fetch(`${Server['APIsEndpoint']}/user?userId=${user["$id"]}`, {
            method: 'GET',
            mode: 'cors'
        }).then(resp => resp.json()).then((jsonData => {
            // console.log(jsonData)
            setUserInfo(jsonData);
        })).catch(err => {
            console.log(err, 'Error in fetching Twitter UserData')
        })

    }


    let handleFetchTweets = () => {
        fetchTweets()
        // console.log("userTweets", userTweets)

    }

    let checkLogin = () => {
        fetch(`${Server['APIsEndpoint']}/twitterLoginCheck?userId=${user["$id"]}`, {
            method: 'GET',
            mode: 'cors'
        }).then(resp => resp.json()).then((jsonData => {
            // console.log(jsonData)
            setLogIn(jsonData["loggedIn"]);
        })).catch(err => {
            console.log(err, 'Error in checking Twitter Login')
        })
    }

    useEffect(() => {
        logIn && (document.getElementById('footer-container').style.position = "static")
        !logIn && (document.getElementById('footer-container').style.position = "absolute")
        logIn && getUser()
        logIn && handleFetchTweets()
    }, [logIn])

    useEffect(() => {
        // console.log("running useEffect")
        checkLogin()

        // console.log(userTweets)
        // console.log(userInfo)
        // console.log('run useEffect')
    }, [])

    let handleNextTweets = () => {
        let btn = document.getElementById('btn-mt-20')
        btn.classList.add('loading')
        console.log('you clicked')
        handleFetchTweets()
        setTimeout(() => {
            btn.classList.remove('loading')
        }, 1000)
    }

    let handleTwitterLogout = async (e) => {
        e.target.classList.add('loading')
        await revokeTwitter(user["$id"]);
        setLogIn(false)
        // console.log('logout')
        setTimeout(() => {
            e.target.classList.remove('loading')
        }, 1000)
    }

    return (
        logIn ? (<div className="container">
            <div id="two-separated-components">
                <div>
                    {/* <h1>Twitter Page</h1> */}
                    <img src={TwitterImage} alt="No Image" />
                    <p>Here, you get your own tweets that you posted on Twitter</p>
                    <p>Tweets are sorted by Most Recent first. </p>
                    <button id="twitter-logout-btn" onClick={handleTwitterLogout} className="ui inverted red button">Logout</button>
                </div>
                <div className="ui card">
                    <div className="content">
                        <div className="header">{userInfo["name"]}</div>
                        <div className="meta">name</div>
                    </div>
                    <div className="content">
                        <div className="header">{userInfo["username"]}</div>
                        <div className="meta">user name</div>
                    </div>
                    <div className="content">
                        <div className="header">{userInfo["id"]}</div>
                        <div className="meta">id</div>
                    </div>
                </div>
            </div>
            <div id="tweets-container" className=" mt-20">
                <div className="ui three cards">
                    {tweetsBlocks}
                </div>
                <button id="btn-mt-20" onClick={handleNextTweets} className="ui inverted primary button">Next</button>
            </div>
        </div>) : <TwitterLanding user={user}/>
    )
}

export default Twitter;
