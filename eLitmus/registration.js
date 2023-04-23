const firebaseConfig = {
    apiKey: "AIzaSyB6W-Z_EoDrwNCs5nYp0lseEqTOQeAD1H4",
    authDomain: "treasure-158ad.firebaseapp.com",
    projectId: "treasure-158ad",
    storageBucket: "treasure-158ad.appspot.com",
    messagingSenderId: "137824581618",
    appId: "1:137824581618:web:8ba8cf244d086054341d6b",
    measurementId: "G-9EG5ZWYQRP"
  };

  firebase.initializeApp(firebaseConfig);
// Get elements
var email = document.getElementById('email');
var passwoSrd = document.getElementById('password');
var confirmPassword = document.getElementById('confirm-password');
var signUpBtn = document.getElementById('signup');
  
// Add sign up event
if (signUpBtn) {
  signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userEmail = email.value;
    const userPassword = password.value;
    const userConfirmPassword = confirmPassword.value;

    if (userPassword !== userConfirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Sign up user with Firebase authentication
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
      .then((userCredential) => {
        // User is signed up
        console.log('User signed up:', userCredential);
        window.location.replace('level1.html');
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Sign up error:', errorCode, errorMessage);
        alert(errorMessage);
      });
  });
}
