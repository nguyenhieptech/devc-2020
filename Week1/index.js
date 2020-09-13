// 
let button = document.getElementById('guessButton');
let randomNumber = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses made for correct guess
let guess = 1;

button.addEventListener('click', function() {
  let userInput = document.getElementById('userInput').value;
  let outputMessage = '';

  if (userInput == randomNumber) {
    // set the outputMessage message
    outputMessage = `
      <h3 style="background-color: Aquamarine">
        Congratulations! You guessed it right in ${guess} guess.
      </h3>
      <h4>Automatically refresh page in 3 seconds.</h4>
    `;
    // render the output message
    document.getElementById('output').innerHTML = outputMessage;
    // or simply, we can use alert(`Congratulations! You guessed it right in ${guess} guess `);

    // refresh the page after 5 seconds (5000 miliseconds)
    setTimeout(() => {
      location = '';
    }, 3000);
  }
  
  else if (userInput > randomNumber) {
    outputMessage = '<h3 style="background-color: Khaki">Try a smaller number :) </h3>';
    document.getElementById('output').innerHTML = outputMessage;
    guess++;
    // alert('Try a smaller number.');
  }
  
  else {
    outputMessage = '<h3 style="background-color: Khaki">Try a greater number :) </h3>';
    document.getElementById('output').innerHTML = outputMessage;
    guess++;
    // alert('Try a greater number.');
  }
});
