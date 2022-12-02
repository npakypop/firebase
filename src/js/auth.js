import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', onSignup);

function onSignup(event) {
    event.preventDefault();
    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    // console.log(email, password);
    //signup user
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        console.log("user", userCredential);
       
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    // ..
    });
 }