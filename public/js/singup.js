import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEGFJ9QbFc7IbMA7mTYcl1xB99mPHnKUg",
  authDomain: "project-3d2f1.firebaseapp.com",
  databaseURL: "https://final-project2-e3577-default-rtdb.firebaseio.com",
  projectId: "project-3d2f1",
  storageBucket: "project-3d2f1.appspot.com",
  messagingSenderId: "899440797226",
  appId: "1:899440797226:web:6ab72b958ba94b26ce8553",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

signupbutt.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;


    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
     set(ref(database, 'user/' + user.uid),
      {
        username: username,
        email: email
      })
      alert('User signed up successfully')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage)
    });
})

loginbutt.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const dt = new Date();
            update(ref(database, 'user/' + user.uid),
                {
                    last_login: dt,
                })
            alert('User loged in successfully')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
});    
})