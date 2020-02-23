(function(){
    "usestrict";

     //element variables
const startGame = document.getElementById("startgame");
const gameControl = document.getElementById("gamecontrol");
const game = document.getElementById("game");
const score = document.getElementById("score");
const actionArea = document.getElementById("actions");
const instructions = document.getElementById("instructions");

const gameData = {
	dice: ["images/1die.png", "images/2die.png", "images/3die.png",
		   "images/4die.png", "images/5die.png", "images/6die.png"],
	players: ["player 1", "player 2"],
	score: [0, 0],
	roll1: 0,
	roll2: 0,
	rollSum: 0,
	index: 0,
	gameEnd: 29
}

startGame.addEventListener("click", function(){
	gameData.index = Math.round(Math.random());
  setUpTurn();
  instructions.style.display = "none";
	//console.log(gameData.index);

	gameControl.innerHTML = '<h2></h2>';

  gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
	document.getElementById('quit').addEventListener("click", function(){
		location.reload();
	});
});

function setUpTurn(){
	game.innerHTML = `<p class="headerintructions" style="text-align:center;">Roll the dice for the ${gameData.players[gameData.index]}</p>`;
	actionArea.innerHTML = '<div style="text-align:center;"><button id="roll">Roll the Dice</button></div>';
	document.getElementById('roll').addEventListener("click", function(){

		throwDice();

	});
		checkWinningCondition();
}

function throwDice(){
	actionArea.innerHTML = '';
	gameData.roll1 = Math.ceil(Math.random()*6);
	gameData.roll2 = Math.ceil(Math.random()*6);
	game.innerHTML = `<p class="headerintructions" style="text-align:center;">Roll the dice for the ${gameData.players[gameData.index]}</p>`;
	game.innerHTML += `<div class="center"><img src="${gameData.dice[gameData.roll1-1]}">
						<img src="${gameData.dice[gameData.roll2-1]}"></div>`;
	gameData.rollSum = gameData.roll1 + gameData.roll2;

	// if two 1's are rolled...
	if( gameData.rollSum === 2 ){
		game.innerHTML += "<p>Oh snap! Snake eyes!</p>";
		gameData.score[gameData.index] = 0;
		gameData.index ? gameData.index = 0 : gameData.index = 1;
		showCurrentScore();
		setTimeout(function(){
			setUpTurn();
		}, 2000);
	}

	// if either die is a 1...
	else if(gameData.roll1 === 1 || gameData.roll2 === 1){
		gameData.index ? gameData.index = 0 : gameData.index = 1;
		game.innerHTML += `<p style="text-align:center;">Sorry, one of your rolls was a one, switching to  ${gameData.players[gameData.index]}</p>`;
		setTimeout(function(){
			setUpTurn();
		}, 2000);
	}

	// if neither die is a 1...
	else {
		gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
		actionArea.innerHTML = '<div class="center"><button id="rollagain">Roll again</button> or <button id="pass">Pass</button></div>';

		document.getElementById('rollagain').addEventListener("click", function(){
			throwDice();
		});

		document.getElementById('pass').addEventListener("click", function(){
			gameData.index ? gameData.index = 0 : gameData.index = 1;
			setUpTurn();
		});

		checkWinningCondition();
	}
}

function checkWinningCondition(){
	if(gameData.score[gameData.index] > gameData.gameEnd){
		score.innerHTML = `<h2 style="text-align:center;" >${gameData.players[gameData.index]}
		wins with ${gameData.score[gameData.index]} points!</h2>`;

		actionArea.innerHTML = '';
		document.getElementById('quit').innerHTML = "Start a New Game?";
	}
	else{
		showCurrentScore();
	}
}

function showCurrentScore(){
	score.innerHTML = `<p style="text-align:center;" id="score">The score is currently <strong>${gameData.players[0]}
	${gameData.score[0]}</strong> and <strong>${gameData.players[1]}
	${gameData.score[1]}</p>`;
}





}());
