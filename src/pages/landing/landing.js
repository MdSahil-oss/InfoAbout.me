import './landing.css'
import devlogo from '../../images/DEV.png'

function Landing(props) {
    return (
        <>
            <div className="pushable">

                <div class="pusher">
                    <div id="head-container" class="ui inverted vertical masthead center aligned segment">

                        <div class="ui container">
                            <div class="ui large secondary inverted pointing menu">

                                <a class="active item">Home</a>
                                <a href='#getStarted' class="item">Get Started</a>
                                <a href='https://github.com/MdSahil-oss/InfoAbout.me' class="toc item">
                                    <i class="large github icon"></i>
                                </a>
                                <div class="right item">
                                    <a href='/login' class="ui inverted button">Log in</a>
                                </div>
                            </div>
                        </div>

                        <div id='text-container' class="ui text container">
                            <h1 class="ui inverted header">
                                InfoAbout.me
                            </h1>
                            <h2>it's an application to check user generated contents on multiple social media platforms </h2>
                            <a href='#getStarted' class="ui huge primary button">Get Started <i class="right arrow icon"></i></a>
                        </div>

                    </div>

                    <div id='getStarted' class="ui vertical stripe segment">
                        <div class="ui middle aligned stackable grid container">
                            <div class="row">
                                <div class="eight wide column">
                                    <h3>Get Started <i class="right arrow icon"></i> </h3>
                                    <p>
                                        InfoAbout.me is an web application which provides convenience to users to check
                                        uploded contents by people on various social media platforms like Twitter, Github, Linkedin and Dev.

                                    </p>
                                    <br />
                                    <p>
                                        The main motive of this application is to let the users to check their own uploaded contents on various social media platforms using this single application,
                                        that's why the application is named as <b>InfoAbout.me</b> but users can also check other people uploaded contents by their userNames
                                        of various social media platforms.
                                        <br /><br />
                                        <b>Note:</b> Each user generated content that we provide is publicly available on the social Media Platforms.
                                    </p>
                                    <p>
                                        To <b>get started</b> with InfoAbout.me you just need to create an account by below given signUp button.
                                    </p>
                                </div>
                                <div id='combined-images-container' class="six wide right floated column">
                                    <div id='first-logo'>
                                        <i class="massive github icon"></i>
                                        <i class="massive twitter icon"></i>
                                    </div>
                                    <h1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        +</h1>
                                    <div id='second-logo'>
                                        <i class="massive linkedin icon"></i>
                                        <img id='dev-logo' src={devlogo} />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="center aligned column">
                                    <a href='/login' class="ui secondary inverted huge button">sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui inverted vertical footer segment">
                        <div class="ui container">
                            <div class="ui stackable inverted divided equal height stackable grid">
                                <div class="three wide column">
                                    <h4 class="ui inverted header">Follow me</h4>
                                    <div class="ui inverted link list">
                                        <a href="#" class="item"><i class="github icon"></i>Github</a>
                                        <a href="#" class="item"><i class="twitter icon"></i>Twitter</a>
                                        <a href="#" class="item"><i class="linkedin icon"></i>Linkedin</a>                                    </div>
                                </div>
                                {/* <div class="three wide column">
                                    <h4 class="ui inverted header">Services</h4>
                                    <div class="ui inverted link list">
                                        <a href="#" class="item">Banana Pre-Order</a>
                                        <a href="#" class="item">DNA FAQ</a>
                                        <a href="#" class="item">How To Access</a>
                                        <a href="#" class="item">Favorite X-Men</a>
                                    </div>
                                </div> */}
                                <div class="seven wide column">
                                    <h4 class="ui inverted header">All Copyrights reserved</h4>
                                    <p>This website is just built for learning and development purposes not for deployment purpose.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;