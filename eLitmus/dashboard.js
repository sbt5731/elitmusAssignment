// app.js
const firebaseConfig = {
    // Your Firebase project config here
        apiKey: "AIzaSyB6W-Z_EoDrwNCs5nYp0lseEqTOQeAD1H4",
        authDomain: "treasure-158ad.firebaseapp.com",
        databaseURL: "https://treasure-158ad-default-rtdb.firebaseio.com",
        projectId: "treasure-158ad",
        storageBucket: "treasure-158ad.appspot.com",
        messagingSenderId: "137824581618",
        appId: "1:137824581618:web:8ba8cf244d086054341d6b",
        measurementId: "G-9EG5ZWYQRP"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database
  const dbRef = firebase.database().ref();
  
  // Listen for changes in the database
  dbRef.on('value', (snapshot) => {
    // Get the data from the snapshot
    const data = snapshot.val();
  
    // Get a reference to the list element
    const list = document.getElementById('my-list');
  
    // Clear the list
    list.innerHTML = '';
  
    // Loop through the data and create list items
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
        list.appendChild(listItem);
      }
    }
  });
  