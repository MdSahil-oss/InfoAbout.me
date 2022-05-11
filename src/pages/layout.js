
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Account from "./account/account"
import Twitter from "./twitter/twitter-page"
import Dev from "./dev/dev"

const Layout = ({account,linkedin,github,twitter,dev,user,userInfo,dispatch,dispatchInfo}) => {
  
  if (twitter) {
    return (
      <>
        <Twitter />
      </>
    )
  }
  else if (dev) {
    return (
      <>
        <Dev user={user}/>
      </>
    )
  }
  return (
    <>
      <Account user={user} userInfo={userInfo} dispatchInfo={dispatchInfo} dispatch={dispatch}/>
    </>
  )
  
};

export default Layout;
