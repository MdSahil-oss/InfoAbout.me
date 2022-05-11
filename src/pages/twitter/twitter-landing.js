import { Server } from "../../utils/config"
import { getUser,twitterLogin } from "./twitter-handler"

export default function TwitterLanding() {

    
    
    return (
        <>
            <div id='text-container' class="ui text container landing-Box">
                <h1 class="ui inverted header">
                    Get Started with Twitter with us
                </h1>
                <h2> To get Started with Twitter you need to authorize us.</h2>
                <a onClick={twitterLogin} class="ui huge primary button">Authorize Us<i class="right arrow icon"></i></a>
            </div>
        </>
    )
}