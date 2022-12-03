import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// listen for auth status changes
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    console.log("onAuthStateChanged ~ user", user);
    if (user) {
      console.log('User logged in: ', user);
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    console.log('User logged out');
  }
});

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', onSignup);

function onSignup(event) {
    event.preventDefault();
    // Get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email, password);

    // Signup user
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user", user);

        // Close modal
        const modal = document.querySelector('#modal-signup')
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

 // LOGOUT
const logout = document.querySelector('#logout');
logout.addEventListener('click', onLogoutBtn);

function onLogoutBtn(event) { 
    event.preventDefault();
    const auth = getAuth();
    signOut(auth).then();
}

// Continue lesson 7 LOGIN ==>
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', onLoginBtn);

function onLoginBtn(event) {
    event.preventDefault()
    // Get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user);
          
        // Close modal
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("errorCode", errorCode);
        const errorMessage = error.message;
        console.log("errorMessage", errorMessage);
      });
}
