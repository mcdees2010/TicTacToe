console.log("Connected");

function startGame(){
	document.turn = "X";
	document.winner = null; 
}

function nextMove(cell){
	if(document.winner != null){
		alert("Player"+ " " +document.turn + " " + "already won");
	}
	if(cell.innerText == ''){
	   cell.innerText = document.turn;
	   switchTurn();
	}else {
		clearInterval();
	}
}

function switchTurn(){
	if(checkWinner(document.turn)){
		alert("Congrats! You won!")
		document.winner = document.turn;
	}else if(document.turn == "X"){
		document.turn = "O";
	} else {
	  document.turn = "X";
	}
}

function checkWinner(move){
	var result = false;
	if(winCombos(0, 1, 2, move) || 
	   winCombos(3, 4, 5, move) || 
	   winCombos(6, 7, 8, move) || 
	   winCombos(0, 3, 6, move) || 
	   winCombos(1, 4, 7, move) || 
	   winCombos(2, 5, 8, move) || 
	   winCombos(0, 4, 8, move) || 
	   winCombos(6, 4, 2, move)) {
		   result = true;
	   }
	   return result;
}

function winCombos(a, b, c, move){
	var result = false;
	if (getBox(a) == move && getBox(b) == move & getBox(c) == move){
		result = true;
	}
	return result;
}

function getBox(number){
	return document.getElementById("c" + number).innerText;
}

function clearBox(number){
	document.getElementById("c" + number).innerText = "";
}