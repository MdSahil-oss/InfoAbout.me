
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Account from "./account/account"
import Github from "./github/github"
import LinkedIn from "./linkedin/linkedin"
import Twitter from "./twitter/twitter"
import Dev from "./dev/dev"

const Layout = ({account,linkedin,github,twitter,dev,user,userInfo,dispatch,dispatchInfo}) => {
  if (github) {
    return (
      <>
        <Github />
      </>
    )
  }
  else if (linkedin) {
    return (
      <>
        <LinkedIn />
      </>
    )
  }
  else if (twitter) {
    return (
      <>
        <Twitter />
      </>
    )
  }
  else if (dev) {
    return (
      <>
        <Dev />
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
