import "./style.css";

const playground = <HTMLDivElement>document.getElementById("playground");

const snakeBody: number[] = [];
let foodPosition = foodGenerator();

const snakeHeadPosition = {
  x: 8,
  y: 8,
};

const snakeHeadDivIdCalculation =
  snakeHeadPosition.y * 15 - snakeHeadPosition.x + 1;

snakeBody[0] = snakeHeadDivIdCalculation;

let moveDirection = "";

let points = 0;

let speed = 600;

let intervalId: NodeJS.Timeout;

function renderingPlayfield() {
  playground.innerHTML = "";
  for (let i = 1; i <= 225; i++) {
    if (i === foodPosition) {
      const div = document.createElement("div");
      div.id = `div${i.toString()}`;
      div.className = "food";
      div.id = "food";
      playground.appendChild(div);
    } else {
      const div = document.createElement("div");
      div.id = `div${i.toString()}`;
      playground.appendChild(div);
    }
    for (const snake of snakeBody) {
      if (i === snake) {
        const playfield = <HTMLDivElement | null>(
          document.getElementById(`div${i.toString()}`)
        );
        if (playfield) {
          playfield.remove();
        }
        const div = document.createElement("div");
        div.id = `div${i.toString()}`;
        div.className = "snake";
        playground.appendChild(div);
      }
    }
  }
}

window.addEventListener("keydown", (event) => {
  command(event.key);
});

renderingPlayfield();
runtimeInterval();

function command(eventInformation: string) {
  if (eventInformation === "ArrowUp") {
    directionChange("up");
  } else if (eventInformation === "ArrowDown") {
    directionChange("down");
  } else if (eventInformation === "ArrowRight") {
    directionChange("right");
  } else if (eventInformation === "ArrowLeft") {
    directionChange("left");
  }
}

function directionChange(direction: string) {
  if (direction === "up") {
    moveDirection = "up";
    intervalMovement();
  } else if (direction === "down") {
    moveDirection = "down";
    intervalMovement();
  } else if (direction === "left") {
    moveDirection = "left";
    intervalMovement();
  } else if (direction === "right") {
    moveDirection = "right";
    intervalMovement();
  }
}

function intervalMovement() {
  checkIfBorderCrash();
  if (moveDirection === "up") {
    snakeHeadPosition.y -= 1;
    if (checkIfBorderCrash() === true) {
      process.exit;
    }
    snakeBody.unshift(snakeBody[0] - 15);
    checkIfSnakeOnFood();
    renderingPlayfield();
  } else if (moveDirection === "down") {
    snakeHeadPosition.y += 1;
    if (checkIfBorderCrash() === true) {
      process.exit;
    }
    snakeBody.unshift(snakeBody[0] + 15);
    checkIfSnakeOnFood();
    renderingPlayfield();
  } else if (moveDirection === "right") {
    snakeHeadPosition.x += 1;
    if (checkIfBorderCrash() === true) {
      process.exit;
    }
    snakeBody.unshift(snakeBody[0] + 1);
    checkIfSnakeOnFood();
    renderingPlayfield();
  } else if (moveDirection === "left") {
    snakeHeadPosition.x -= 1;
    if (checkIfBorderCrash() === true) {
      process.exit;
    }
    snakeBody.unshift(snakeBody[0] - 1);
    checkIfSnakeOnFood();
    renderingPlayfield();
  }
}

function foodGenerator() {
  const randomLocationForX = Math.round(Math.random() * (15 - 1) + 1);
  const randomLocationForY = Math.round(Math.random() * (15 - 1) + 1);

  const foodPlacement = {
    randomLocationForX,
    randomLocationForY,
  };

  const squaryApple =
    foodPlacement.randomLocationForY * 15 - foodPlacement.randomLocationForX;

  if (snakeBody.find((snake) => snake === squaryApple) ?? 0) {
    foodGenerator();
  }
  return squaryApple;
}

const pointVariable = <HTMLDivElement>document.getElementById("points");

function checkIfSnakeOnFood() {
  checkIfHeadCrash();
  if (snakeBody[0] === foodPosition) {
    foodPosition = 0;
    const newPosition = foodGenerator();
    foodPosition = newPosition;
    points++;
    pointVariable.innerHTML = "Your points: " + points.toString();
  } else {
    snakeBody.pop();
  }
}

function checkIfHeadCrash() {
  if (snakeBody.length > 1) {
    for (let x = 1; x <= snakeBody.length; x++) {
      if (
        snakeBody[0] === snakeBody[x] ||
        snakeHeadPosition.y < 1 ||
        snakeHeadPosition.y > 15 ||
        snakeHeadPosition.x < 1 ||
        snakeHeadPosition.x > 15
      ) {
        gameOver();
      }
    }
  }
}

function checkIfBorderCrash() {
  if (
    snakeHeadPosition.y < 1 ||
    snakeHeadPosition.y > 15 ||
    snakeHeadPosition.x < 1 ||
    snakeHeadPosition.x > 15
  ) {
    gameOver();
    return true;
  }
}

function runtimeInterval() {
  intervalId = setInterval(intervalMovement, speed);
}

const resetButton = <HTMLInputElement>document.querySelector("#reset");

function showButton() {
  resetButton.classList.add("show");
}

function gameOver() {
  speed = 0;
  showButton();
  setTimeout(gameOverMessage, 50);
  clearInterval(intervalId);
}

function gameOverMessage() {
  alert("GAME OVER!");
}
