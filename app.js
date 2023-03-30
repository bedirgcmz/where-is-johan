/**
 * Variables
 */
let guessRight = 1;
const randomNumber = Math.floor(Math.random() * 10 + 1);
let inputGuess = document.getElementById("guess-input");
let inputBtn = document.getElementById("guess-btn");
let message = document.querySelector(".message");
let refresh = document.querySelector(".d-none");

/**
 * Function that evaluates with a click
 */
inputBtn.addEventListener("click", function () {
  let userGuess = inputGuess.value;
  let JohanHidingWagon = randomNumber;

  if (userGuess === "") {
    writeMesaj("You did not make a guess!");
    console.log("You did not make a guess.");
    guessRight--;
    inputGuess.value = "";
  } else if (guessRight === 5) {
    writeMesaj("Sorry! Your guess is over. Your score is 0. Refresh the page to play again", "red");
    console.log("Sorry! Your guess is over. Your score is 0");
    gameOver("red");
    inputGuess.value = "";
    refreshPage();
  } else if (userGuess < JohanHidingWagon) {
    writeMesaj("You don't know, try a larger number", "blue");
    console.log("You don't know, try a larger number");
    inputGuess.value = "";
  } else if (userGuess > JohanHidingWagon) {
    writeMesaj("You don't know, try a smaller number", "orange");
    console.log("You don't know, try a smaller number");
    inputGuess.value = "";
  } else if (userGuess == JohanHidingWagon) {
    writeMesaj(
      `Great! You know ${guessRight} times. Your score= ${
        100 - (guessRight - 1) * 25
      }. Refresh the page to play again`,
      "green"
    );
    console.log(`Great! You know ${guessRight} times. Your score= ${100 - (guessRight - 1) * 25}`);
    gameOver("green");
    inputGuess.value = "";
    refreshPage();
  }
  guessRight++;
  inputGuess.value = "";
});

/**
 * My message sending function
 */
function writeMesaj(myMassage, color) {
  message.textContent = myMassage;
  message.style.color = color;
}
/**
 *Page refresh function
 */
function refreshPage() {
  refresh.className = "btn btn-success m-auto d-flex justify-content-center";
}
/**
 *Game over function
 */
function gameOver(color) {
  inputGuess.disabled = true;
  inputBtn.disabled = true;
  inputGuess.style.borderColor = color;
}
