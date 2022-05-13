import {Server} from '../../utils/config'

let twitterLogin = async (userId) => {
  console.log('started Running login Twitter')
  window.location.replace(`${Server['APIsEndpoint']}/twitterLogin?userId=${userId}`);
};


let revokeTwitter = async (userId) => {
  try {
    let res = await fetch(`${Server['APIsEndpoint']}/twitterRevoke?userId=${userId}`, {
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
