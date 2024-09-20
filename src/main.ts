import "./style.css";

const playground = <HTMLDivElement>document.getElementById("playground");

let liveSnakeHeadPosition = 113;

let foodPosition = foodGenerator();

let points = 0;

const snakeBody: number[] = [];
let snakeBodyIndex = 0;
snakeBody[snakeBodyIndex] = liveSnakeHeadPosition;

function renderingPlayfield() {
  playground.innerHTML = "";
  for (let i = 1; i <= 225; i++) {
    if (i === foodPosition) {
      const div = document.createElement("div");
      div.id = `div${i.toString()}`;
      div.className = "food";
      playground.appendChild(div);
    } else {
      const div = document.createElement("div");
      div.id = `div${i.toString()}`;
      div.className = "playfield";
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
  console.log(snakeBody);
}

window.addEventListener("keydown", (event) => {
  move(event.key);
});

renderingPlayfield();

function move(input: string) {
  if (input === "ArrowUp") {
    liveSnakeHeadPosition -= 15;
    checkIfSnakeOnFood(input);
    for (let i = 0; i < snakeBody.length; i++) {
      snakeBody[i] -= 15;
    }
    renderingPlayfield();
  } else if (input === "ArrowDown") {
    liveSnakeHeadPosition += 15;
    checkIfSnakeOnFood(input);
    for (let i = 0; i < snakeBody.length; i++) {
      snakeBody[i] += 15;
    }
    renderingPlayfield();
  } else if (input === "ArrowRight") {
    liveSnakeHeadPosition += 1;
    checkIfSnakeOnFood(input);
    for (let i = 0; i < snakeBody.length; i++) {
      snakeBody[i] += 1;
    }
    renderingPlayfield();
  } else if (input === "ArrowLeft") {
    liveSnakeHeadPosition -= 1;
    checkIfSnakeOnFood(input);
    for (let i = 0; i < snakeBody.length; i++) {
      snakeBody[i] -= 1;
    }
    renderingPlayfield();
  }
}

function foodGenerator() {
  const randomLocationForX = Math.round(Math.random() * (15 - 1) + 1);
  const randomLocationForY = Math.round(Math.random() * (15 - 1) + 1);
  if (randomLocationForY === 1) {
    const squaryApple = randomLocationForX;
    return squaryApple;
  } else {
    const repairAppleCoordinates = randomLocationForY * 15;
    const squaryApple = randomLocationForX + repairAppleCoordinates;
    return squaryApple;
  }
}

function checkIfSnakeOnFood(dataOfMove: string) {
  if (liveSnakeHeadPosition === foodPosition) {
    foodPosition = 0;
    const newPosition = foodGenerator();
    foodPosition = newPosition;
    points++;
    newSnakeBodypartGenerator(dataOfMove);
  }
}

function newSnakeBodypartGenerator(movement: string) {
  if (movement === "ArrowUp") {
    snakeBodyIndex++;
    snakeBody[snakeBodyIndex] = snakeBody[snakeBodyIndex - 1] + 15;
  }
  if (movement === "ArrowDown") {
    snakeBodyIndex++;
    snakeBody[snakeBodyIndex] = snakeBody[snakeBodyIndex - 1] - 15;
  }
  if (movement === "ArrowRight") {
    snakeBodyIndex++;
    snakeBody[snakeBodyIndex] = snakeBody[snakeBodyIndex - 1] - 1;
  }
  if (movement === "ArrowLeft") {
    snakeBodyIndex++;
    snakeBody[snakeBodyIndex] = snakeBody[snakeBodyIndex - 1] + 1;
  }
}

// function checkIfBorderCrash() {
//   if (
//     snakeTracker.x === 16 ||
//     snakeTracker.x === 0 ||
//     snakeTracker.y === 16 ||
//     snakeTracker.y === 0
//   ) {
//     console.log("You loose");
//   }
// }
