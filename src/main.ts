import "./style.css";

const playground = <HTMLDivElement>document.getElementById("playground");

let liveSnakeHeadPosition = 113;

let foodPosition = foodGenerator();

const snakeBody: number[] = [];
let snakeBodyIndex = 0;
snakeBody[0] = liveSnakeHeadPosition;

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
  // console.log(snakeBody);
}

window.addEventListener("keydown", (event) => {
  move(event.key);
});

renderingPlayfield();

function move(input: string) {
  if (input === "ArrowUp") {
    liveSnakeHeadPosition -= 15;
    snakeBody[0] -= 15;
    checkIfSnakeOnFood(input);
    renderingPlayfield();
  } else if (input === "ArrowDown") {
    liveSnakeHeadPosition += 15;
    snakeBody[0] += 15;
    checkIfSnakeOnFood(input);
    renderingPlayfield();
  } else if (input === "ArrowRight") {
    liveSnakeHeadPosition += 1;
    snakeBody[0] += 1;
    checkIfSnakeOnFood(input);
    renderingPlayfield();
  } else if (input === "ArrowLeft") {
    liveSnakeHeadPosition -= 1;
    snakeBody[0] -= 1;
    checkIfSnakeOnFood(input);
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

function checkIfSnakeOnFood(dataOfMove: string) {
  if (liveSnakeHeadPosition === foodPosition) {
    foodPosition = 0;
    const newPosition = foodGenerator();
    foodPosition = newPosition;
    snakeBodyIndex++;
    if (dataOfMove === "ArrowUp") {
      snakeBody[snakeBodyIndex] = snakeBody[snakeBodyIndex - 1] + 15;
      const newSnakePart = document.createElement("div");
      newSnakePart.id = `div${snakeBody[snakeBodyIndex].toString()}`;
      newSnakePart.className = "snake";
      playground.appendChild(newSnakePart);
    }
    if (dataOfMove === "ArrowDown") {
      snakeBody[snakeBodyIndex] = snakeBody[snakeBodyIndex - 1] - 15;
      const newSnakePart = document.createElement("div");
      newSnakePart.id = `div${snakeBody[snakeBodyIndex].toString()}`;
      newSnakePart.className = "snake";
      playground.appendChild(newSnakePart);
    }
    if (dataOfMove === "ArrowRight") {
      snakeBody[snakeBodyIndex] = snakeBody[snakeBodyIndex - 1] - 1;
      const newSnakePart = document.createElement("div");
      newSnakePart.id = `div${snakeBody[snakeBodyIndex].toString()}`;
      newSnakePart.className = "snake";
      playground.appendChild(newSnakePart);
    }
    if (dataOfMove === "ArrowLeft") {
      snakeBody[snakeBodyIndex] = snakeBody[snakeBodyIndex - 1] + 1;
      const newSnakePart = document.createElement("div");
      newSnakePart.id = `div${snakeBody[snakeBodyIndex].toString()}`;
      newSnakePart.className = "snake";
      playground.appendChild(newSnakePart);
    }
  }
}
