import firebase from "firebase/app";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDbT_9oaNSPud5pb07RDLXAWxI9-L7Ptpo",
    authDomain: "chatapp-8470a.firebaseapp.com",
    databaseURL: "https://chatapp-8470a.firebaseio.com",
    projectId: "chatapp-8470a",
    storageBucket: "chatapp-8470a.appspot.com",
    messagingSenderId: "102503918275",
    appId: "1:102503918275:web:74d3f26e4579b3a4c59076",
    measurementId: "G-M2V637VJJ9"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  export {storage,firebase as default}