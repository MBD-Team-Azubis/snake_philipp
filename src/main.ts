import "./style.css";

const playground = <HTMLDivElement>document.getElementById("playground");

let foodPosition = foodGenerator();

const snakeBody: number[] = [];
snakeBody[0] = 113;

let points = 0;

const borderTop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const borderBottom = [
  211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225,
];
const borderLeft = [
  1, 16, 31, 46, 61, 76, 91, 106, 121, 136, 151, 166, 181, 196, 211,
];
const borderRight = [
  15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225,
];

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
}

window.addEventListener("keydown", (event) => {
  move(event.key);
});

renderingPlayfield();

function move(input: string) {
  if (input === "ArrowUp") {
    checkIfBorderCrash(input);
    snakeBody.unshift(snakeBody[0] - 15);
    checkIfSnakeOnFood();
    renderingPlayfield();
  } else if (input === "ArrowDown") {
    checkIfBorderCrash(input);
    snakeBody.unshift(snakeBody[0] + 15);
    checkIfSnakeOnFood();
    renderingPlayfield();
  } else if (input === "ArrowRight") {
    checkIfBorderCrash(input);
    snakeBody.unshift(snakeBody[0] + 1);
    checkIfSnakeOnFood();
    renderingPlayfield();
  } else if (input === "ArrowLeft") {
    checkIfBorderCrash(input);
    snakeBody.unshift(snakeBody[0] - 1);
    checkIfSnakeOnFood();
    renderingPlayfield();
  }
  console.log(snakeBody);
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

const pointVariable = <HTMLDivElement>document.getElementById("points");

function checkIfSnakeOnFood() {
  if (snakeBody[0] === foodPosition) {
    foodPosition = 0;
    const newPosition = foodGenerator();
    foodPosition = newPosition;
    points++;
    pointVariable.innerHTML = "Your points: " + points.toString();
  } else {
    snakeBody.pop();
  }
  crashCheck();
}

function crashCheck() {
  if (snakeBody.length > 1) {
    for (let x = 1; x <= snakeBody.length; x++) {
      if (snakeBody[0] === snakeBody[x]) {
        alert("GAME OVER!");
        location.reload();
      }
    }
  }
}

function checkIfBorderCrash(movement: string) {
  for (let y = 0; y <= borderTop.length; y++) {
    if (movement === "ArrowUp" && snakeBody[0] === borderTop[y]) {
      alert("GAME OVER!");
      location.reload();
    }
  }
  for (let y = 0; y <= borderBottom.length; y++) {
    if (movement === "ArrowDown" && snakeBody[0] === borderBottom[y]) {
      alert("GAME OVER!");
      location.reload();
    }
  }
  for (let y = 0; y <= borderLeft.length; y++) {
    if (movement === "ArrowLeft" && snakeBody[0] === borderLeft[y]) {
      alert("GAME OVER!");
      location.reload();
    }
  }
  for (let y = 0; y <= borderRight.length; y++) {
    if (movement === "ArrowRight" && snakeBody[0] === borderRight[y]) {
      alert("GAME OVER!");
      location.reload();
    }
  }
}
