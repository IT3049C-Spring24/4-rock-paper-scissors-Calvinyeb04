// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userNameInput = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI() {
  scoreParagraph.textContent = `${game.username}: ${game.score.user} v CPU: ${game.score.cpu}`;
}

// updateGameHistoryUI
function updateGameHistoryUI() {
  gameHistoryParagraph.textContent = game.gameHistoryLog.join(", ");
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (e) {
  e.preventDefault();
  const username = userNameInput.value;
  game = new RockPaperScissors(username);
  welcomeScreen.classList.add(`d-none`);
  gameScreen.classList.remove(`d-none`);
  updateScoreTallyUI();
});

// go-button EventListener
goButton.addEventListener(`click`, function (e) {
  e.preventDefault();
  const userSelectionValue = userSelection.value;
  const result = game.play(userSelectionValue);
  updateScoreTallyUI();
  updateGameHistoryUI();
});
