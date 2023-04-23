const form = document.querySelector('form');
const answerInput = document.querySelector('#answer');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const answer = answerInput.value.trim().toLowerCase();

  if (answer === 'big brick field mill') {
    alert('Congratulations! Your answer is correct.');
    window.location.href = 'level2.html';
  } else {
    alert('Sorry, your answer is incorrect. Please try again.');
  }
});
