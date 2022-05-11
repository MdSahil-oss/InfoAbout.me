import {Server} from '../../utils/config'

let twitterLogin = async () => {
  console.log('started Running login Twitter')
  window.location.replace(`${Server['APIsEndpoint']}/twitterLogin`);
};


// app.get("/revoke",
let revokeTwitter = async (req, res) => {
  try {
    let res = await fetch(`${Server['APIsEndpoint']}/twitterRevoke`, {
      method: 'GET',
      mode: 'cors'
    })

    if(res) {
      return res.json()
    }
  } catch (error) {
    console.log(error);
  }
};


export { twitterLogin, revokeTwitter };