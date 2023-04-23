// Get the form and input elements
const form = document.querySelector('form');
const word1 = document.getElementById('word1');
const word2 = document.getElementById('word2');
const word3 = document.getElementById('word3');

// Add event listener to the form on submit
form.addEventListener('submit', function(e) {
  // Prevent default form submission behavior
  e.preventDefault();
  
  // Get the input values
  const value1 = word1.value.toLowerCase().trim();
  const value2 = word2.value.toLowerCase().trim();
  const value3 = word3.value.toLowerCase().trim();
  
  // Check if the input values are correct
  if (value1 === 'farm' && value2 === 'bloom' && value3 === 'garden') {
    alert('Congratulations! You found all the hidden words.');
    window.location.href = 'level3.html'
  } else {
    alert('Sorry, at least one of the words is incorrect. Please try again.');
  }
});

// Add event listener to the input fields to show a message based on the length of the words
word1.addEventListener('input', function() {
  if (word1.value.length < word2.value.length && word1.value.length < word3.value.length) {
    document.getElementById('note').innerHTML = 'Note: The word with smaller length will come in first';
  } else {
    document.getElementById('note').innerHTML = '';
  }
});

word2.addEventListener('input', function() {
  if (word2.value.length < word1.value.length && word2.value.length < word3.value.length) {
    document.getElementById('note').innerHTML = 'Note: The word with smaller length will come in first';
  } else {
    document.getElementById('note').innerHTML = '';
  }
});

word3.addEventListener('input', function() {
  if (word3.value.length < word1.value.length && word3.value.length < word2.value.length) {
    document.getElementById('note').innerHTML = 'Note: The word with smaller length will come in first';
  } else {
    document.getElementById('note').innerHTML = '';
  }
});
