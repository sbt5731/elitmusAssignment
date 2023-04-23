// Get form elements
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signinButton = document.getElementById('signin');

// Add form submit event listener
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting
  
  // Get user input
  const email = emailInput.value;
  const password = passwordInput.value;
  
  // Validate user input
  if (!email) {
    alert('Please enter your email');
    return;
  }
  
  if (!password) {
    alert('Please enter your password');
    return;
  }
  
  // Sign in with Firebase
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      // Redirect to success page
      window.location.replace('level1.html');
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
