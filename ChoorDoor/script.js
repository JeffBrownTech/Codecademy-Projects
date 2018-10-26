let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'

let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let currentlyPlaying = true;
let startButton = document.getElementById('start');
let scoreNumber = 0;
let bestStreak = 0;
let currentStreak = 0;
let scoreLabel = document.getElementById('score-number');
let highScoreLabel = document.getElementById('high-score-number');

const isBot = door => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

const isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const playDoor = door => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door) === true) {
    gameOver();
  }
}

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor ===2) {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}

doorImage1.onclick = () => {
  if (currentlyPlaying === true && isClicked(doorImage1) === false) {
  	doorImage1.src = openDoor1;
  	playDoor(door1);
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying === true && isClicked(doorImage2) === false) {
    doorImage2.src = openDoor2;
    playDoor(door2);
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying === true && isClicked(doorImage3) === false) {
    doorImage3.src = openDoor3;
    playDoor(door3);
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
  	startRound();
  }
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!'
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = status => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
    scoreNumber++;
    scoreLabel.innerHTML = scoreNumber;
    currentStreak++;
    
    if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        highScoreLabel.innerHTML = bestStreak;
    }    
  } else {
    startButton.innerHTML = 'Game over! Play again?';
    scoreNumber = 0;
    scoreLabel.innerHTML = scoreNumber;
    currentStreak = 0;
  }
  
  currentlyPlaying = false;
}

startRound();