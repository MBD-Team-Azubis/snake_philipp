import "./style.css";

const playground = <HTMLDivElement>document.getElementById("playground");

let liveSnakePosition = 113;

let foodPosition = foodGenerator();

function renderingPlayfield() {
  playground.innerHTML = "";
  for (let i = 1; i <= 225; i++) {
    if (i === liveSnakePosition) {
      const div = document.createElement("div");
      div.id = `div${i.toString()}`;
      div.className = "snake";
      playground.appendChild(div);
    } else if (i === foodPosition) {
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
  }
}

window.addEventListener("keydown", (event) => {
  move(event.key);
});

renderingPlayfield();

function move(input: string) {
  if (input === "ArrowUp") {
    liveSnakePosition -= 15;
    checkIfSnakeOnFood();
    renderingPlayfield();
  } else if (input === "ArrowDown") {
    liveSnakePosition += 15;
    checkIfSnakeOnFood();
    renderingPlayfield();
  } else if (input === "ArrowRight") {
    liveSnakePosition += 1;
    checkIfSnakeOnFood();
    renderingPlayfield();
  } else if (input === "ArrowLeft") {
    liveSnakePosition -= 1;
    checkIfSnakeOnFood();
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

function checkIfSnakeOnFood() {
  if (liveSnakePosition === foodPosition) {
    foodPosition = 0;
    const newPosition = foodGenerator();
    foodPosition = newPosition;
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
