/*
How many hours did you spend on this assignment?:
Part 1 - 1 hr 20mins

What part of the assignment did you spend the most time on?:
Part 1 - Reversed Game - some logic got mixed up

How comfortable did you feel with this assignment? (1-5):

Is there anything in this code that you feel pleased about?:

What's one aspect of your code you would like specific, elaborate feedback on?:

*/

var PLAYED_SCISSORS = "scissors";
var PLAYED_PAPER = "paper";
var PLAYED_STONE = "stone";

var PLAYMODE_NORMAL = 0;
var PLAYMODE_REVERSED = 1;

var RESULT_DRAW = "draw";
var RESULT_WIN = "win! Hooray!";
var RESULT_LOSE = "lose! Bummer.";

var generateRandomChoice = function () {
  //generate a choice between 0, 1, 2
  return Math.floor(Math.random() * 3);
};

var getPlayedHand = function (choice) {
  if (choice == 0) return PLAYED_SCISSORS;
  if (choice == 1) return PLAYED_PAPER;
  return PLAYED_STONE;
};

var getNormalPlayResult = function (user, com) {
  console.log(user + "   vs   " + com);
  //case 1 - played same hand
  if (user == com) return RESULT_DRAW;
  //case 2 - user wins
  if (user == PLAYED_SCISSORS && com == PLAYED_PAPER) return RESULT_WIN;
  if (user == PLAYED_PAPER && com == PLAYED_STONE) return RESULT_WIN;
  if (user == PLAYED_STONE && com == PLAYED_SCISSORS) return RESULT_WIN;
  //case 3 - user lose
  return RESULT_LOSE;
};

var getReversedResult = function (result) {
  if (result == RESULT_DRAW) return RESULT_DRAW;
  if (result == RESULT_LOSE) return RESULT_WIN;
  return RESULT_LOSE;
};

var checkPlayMode = function (input) {
  if (input == "reversed") return PLAYMODE_REVERSED;
  return PLAYMODE_NORMAL;
};

var validateInput = function (input) {
  if (
    input == PLAYED_SCISSORS ||
    input == PLAYED_PAPER ||
    input == PLAYED_STONE
  )
    return true;
  return false;
};

var main = function (input) {
  //possible input = scissor, paper, stone, unknown && contains reversed
  const split = input.split(" ");
  var playMode = PLAYMODE_NORMAL;
  var userPlayed = input;

  if (split.length > 1) {
    playMode = checkPlayMode(split[0]);
    userPlayed = split[1];
  }

  if (!validateInput(userPlayed))
    return "Please input scissors, paper or stone to play this game";

  var comPlayed = getPlayedHand(generateRandomChoice());
  var result = getNormalPlayResult(userPlayed, comPlayed);
  console.log(result);
  if (playMode == PLAYMODE_REVERSED) result = getReversedResult(result);

  return `The computer choice ${comPlayed}.
  <br>
  You chose ${userPlayed}
  <br><br>
  You ${result}
  <br><br>
  Now you can type "scissors", "paper" or "stone" to play another round!`;
};
