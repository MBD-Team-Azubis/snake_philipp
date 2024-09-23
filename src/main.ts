import "./style.css";

const playground = <HTMLDivElement>document.getElementById("playground");

let foodPosition = foodGenerator();

const snakeBody: number[] = [];
let snakeBodyIndex = 0;
snakeBody[0] = 113;

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
    snakeBody.unshift(snakeBody[0] - 15);
    checkIfSnakeOnFood();
    renderingPlayfield();
  } else if (input === "ArrowDown") {
    snakeBody.unshift(snakeBody[0] + 15);
    checkIfSnakeOnFood();
    renderingPlayfield();
  } else if (input === "ArrowRight") {
    snakeBody.unshift(snakeBody[0] + 1);
    checkIfSnakeOnFood();
    renderingPlayfield();
  } else if (input === "ArrowLeft") {
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

function checkIfSnakeOnFood() {
  if (snakeBody[0] === foodPosition) {
    foodPosition = 0;
    const newPosition = foodGenerator();
    foodPosition = newPosition;
    snakeBodyIndex++;
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
      }
    }
  }
}
