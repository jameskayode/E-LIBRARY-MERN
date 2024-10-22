import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDW-FK-2f2_JL7HSqg8ZFOVbkVt_bCbnhw",
    authDomain: "e-library-sakthi.firebaseapp.com",
    projectId: "e-library-sakthi",
    storageBucket: "e-library-sakthi.appspot.com",
    messagingSenderId: "1038842155564",
    appId: "1:1038842155564:web:1c46244e6d999b17a1b789"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const providerfb=new firebase.auth.FacebookAuthProvider();

  export {auth,provider,providerfb};
  export default db;