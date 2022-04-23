import './navbar.css'
import api from "../../api/api";
import { FetchState } from "../../hooks";
import { Server } from "../../utils/config";

function Navbar({dispatch,setAccount,setGithub,setTwitter,setLinkedin,setDev}) {

    
    let handleLayout = (e) => {
        let items = Array.from(document.getElementsByClassName('item'))
        setAccount(false)
        setGithub(false)
        setLinkedin(false)
        setTwitter(false)
        setDev(false)

        e.target.text.toLowerCase() === 'account' && setAccount(true);
        e.target.text.toLowerCase() === 'github' && setGithub(true);
        e.target.text.toLowerCase() === 'twitter' && setTwitter(true);
        e.target.text.toLowerCase() === 'linkedin' && setLinkedin(true);
        e.target.text.toLowerCase() === 'dev.to' && setDev(true);

        items.forEach((element) => {
            element.style.backgroundColor = 'white'
        })
        e.target.style.backgroundColor = 'rgb(199, 199, 199)'
    }

    let handleLogout = async (e) => {
        e.target.classList.add('loading')
        dispatch({ type: FetchState.FETCH_INIT });
        try {
            await api.deleteCurrentSession();
            dispatch({ type: FetchState.FETCH_SUCCESS, payload: null });
        } catch (e) {
            dispatch({ type: FetchState.FETCH_FAILURE });
        }
        e.target.classList.remove('loading')
    }

    return (
        <div id="navbar" className="ui secondary  menu">
            <h3 className="item">
                <span>Info</span><span>About.me</span>
            </h3>
            <a onClick={handleLayout} className="item" >
                Account
            </a>
            <a onClick={handleLayout} className="item" >
                GitHub
            </a>
            <a className="item" onClick={handleLayout}>
                Dev.to
            </a>
            <a className="item" onClick={handleLayout}>
                Twitter
            </a>
            <a className="item" onClick={handleLayout}>
                LinkedIn
            </a>
            <div className="right menu">
                <a onClick={handleLogout} className="ui item" >
                    Logout
                </a>
            </div>
        </div>
    )
}

export default Navbar;