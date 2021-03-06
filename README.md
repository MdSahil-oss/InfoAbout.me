

![Alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--dXwXyq0I--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9sbnvyv22dhhuq83lnvk.png?raw=true "Title")


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Do you want to run this application locally on your system ?

To setup Frontend for local development go through the each step that mentioned below:

1) Install all dependencies that are neccessary to run this application.
2) Install appwrite on your system from https://appwrite.io/.
3) then set your appwrite's local domain name in 'endpoint' variable of src/utils/config.js file.
4) Create a project by going through the localhost:port in your appwrite locally.
5) and Get a project Id and save it to 'project' of src/utils/config.js.
6) and create few database collections in your appwrite by going through the localhost:port. collections must look like as shown below 

  ![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/3e84f3265a5edf09ce4660954a11069caf38ef6a/src/images/Screenshot%20from%202022-05-12%2018-14-56.png?raw=true "Title") 
  ![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-13%2000-51-01.png?raw=true "Title") 
  ![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2018-16-05.png?raw=true "Title") 
  
 5) Put collection ID of UsersInfo collection  in 'collectionID' of src/utils/config.js.
 6) and also put collection ID of Dev-Credential in 'devCredential' of src/utils/config.js.
 7) and at the last run `npm start` in the root folder.
 
 Here Frontend setup has finished but you might be thinking that there are some extra variables in src/utils/config.js for that I want say don't worry about them I created those variables for just testing purpose , Now let's go through Backend setup:
 
 1) save ports numbers in 'FrontEndPort' and 'BackEndPort' of /express-server/config/keys.js for frontend port and backend port.
 2) and also save entire URL of frontend and backend with port numbers in 'FrontEndPoint' and in 'APIsEndpoint' of /express-server/config/keys.js
 3) and at the end run `node ./index.js` in express-server repository.
 
 Now Backend setup has finished, but stop something is remaining to setup that's ClientId and ClientSecret in /express-server/config/keys.js
 
 1) To get ClientId and ClientSecret you will have to create an account with Twitter Developer API :- https://developer.twitter.com/en/portal/petition/essential/basic-info
 2) after getting Client Id and Client Secret from Twitter save it to 'ClientId' and 'ClientSecret' of /express-server/config/keys.js.
 3) and also save redirect-URL in /express-server/index.js on line number 30 for 'callback' variable. redirect URL is that you saved for Twitter App while creating an App for Twitter project in Twitter Developer API account.
 4) syntax to save redirect URL for this application in Twitter Developer API account must be :->  locahost:BackEndPort/twitterCallback.
 
 
 
Here are some images and videos for demo of InfoAbout Application.

##  Videos

![Alt text](https://drive.google.com/file/d/11W7H2GSUDaawtUE5bqTOLjyTR8Eqmi6H/view?usp=sharing?raw=true "Title")

![Alt text](https://drive.google.com/file/d/1B03R09e2PvisJluThU2jcx3_xZi0Y_Bz/view?usp=sharing?raw=true "Title")

##  Images

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images1/Screenshot%20from%202022-05-12%2004-52-11.png?raw=true "Title") 

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2004-52-21.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2004-52-37.png.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2004-52-50.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2005-08-24.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2005-08-34.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2005-09-13.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2005-09-25.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2005-18-33.png.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2005-11-36.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2005-11-58.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2005-12-02.png.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2005-18-22.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2005-18-33.png.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2005-20-09.png?raw=true "Title")

![Alt text](https://github.com/MdSahil-oss/InfoAbout.me/blob/5b959baa38d9b3aa30e421c06d131199a39045ea/src/images/Screenshot%20from%202022-05-12%2005-20-14.png?raw=true "Title")





## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
