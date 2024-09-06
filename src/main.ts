import "./style.css";

const playground = <HTMLDivElement>document.getElementById("playground");

const liveSnakePosition = {
  x: 8,
  y: 8,
};

let playerStart = "";

for (let i = 1; i <= 225; i++) {
  if (i === 113) {
    const div = document.createElement("div");
    div.id = `div${i.toString()}`;
    playerStart = div.id;
    div.className = "snake";
    playground.appendChild(div);
  } else {
    const div = document.createElement("div");
    div.id = `div${i.toString()}`;
    playground.appendChild(div);
  }
}

checkIfSnakeOnFood();

window.addEventListener("keydown", (event) => {
  move(event.key);
});

function newSnakePosition(inputCheck: string) {
  const currentSnake = document.getElementsByClassName("snake");

  for (let k = 0; k < currentSnake.length; k++) {
    currentSnake[k].classList.remove("snake");
    if (inputCheck === "ArrowUp") {
      let storage = playerStart.split("div");
      let nextStorage = storage[1];
      let anotherStorage = parseInt(nextStorage);
      let finalStorage = anotherStorage - 15;
      let overwritten = finalStorage.toString();
      let nextStep = "div" + overwritten;
      const result = <HTMLDivElement>document.getElementById(nextStep);
      result.classList.add("snake");
      storage = [""];
      nextStorage = "";
      anotherStorage = 0;
      finalStorage = 0;
      overwritten = "";
      playerStart = nextStep;
      nextStep = "";
    }
    if (inputCheck === "ArrowDown") {
      let storage = playerStart.split("div");
      let nextStorage = storage[1];
      let anotherStorage = parseInt(nextStorage);
      let finalStorage = anotherStorage + 15;
      let overwritten = finalStorage.toString();
      let nextStep = "div" + overwritten;
      const result = <HTMLDivElement>document.getElementById(nextStep);
      result.classList.add("snake");
      storage = [""];
      nextStorage = "";
      anotherStorage = 0;
      finalStorage = 0;
      overwritten = "";
      playerStart = nextStep;
      nextStep = "";
    }
    if (inputCheck === "ArrowRight") {
      let storage = playerStart.split("div");
      let nextStorage = storage[1];
      let anotherStorage = parseInt(nextStorage);
      let finalStorage = anotherStorage + 1;
      let overwritten = finalStorage.toString();
      let nextStep = "div" + overwritten;
      const result = <HTMLDivElement>document.getElementById(nextStep);
      result.classList.add("snake");
      storage = [""];
      nextStorage = "";
      anotherStorage = 0;
      finalStorage = 0;
      overwritten = "";
      playerStart = nextStep;
      nextStep = "";
    }
    if (inputCheck === "ArrowLeft") {
      let storage = playerStart.split("div");
      let nextStorage = storage[1];
      let anotherStorage = parseInt(nextStorage);
      let finalStorage = anotherStorage - 1;
      let overwritten = finalStorage.toString();
      let nextStep = "div" + overwritten;
      const result = <HTMLDivElement>document.getElementById(nextStep);
      result.classList.add("snake");
      storage = [""];
      nextStorage = "";
      anotherStorage = 0;
      finalStorage = 0;
      overwritten = "";
      playerStart = nextStep;
      nextStep = "";
    }
  }
  checkIfBorderCrash();
}

function move(input: string) {
  if (input === "ArrowUp") {
    liveSnakePosition.y -= 1;
  } else if (input === "ArrowDown") {
    liveSnakePosition.y += 1;
  } else if (input === "ArrowRight") {
    liveSnakePosition.x += 1;
  } else if (input === "ArrowLeft") {
    liveSnakePosition.x -= 1;
  }
  newSnakePosition(input);
  checkIfSnakeOnFood();
  console.log(liveSnakePosition);
}

function checkIfBorderCrash() {
  if (
    liveSnakePosition.x === 16 ||
    liveSnakePosition.x === 0 ||
    liveSnakePosition.y === 16 ||
    liveSnakePosition.y === 0
  ) {
    console.log("You loose");
  }
}

function checkIfSnakeOnFood() {
  const randomLocationForX = Math.round(Math.random() * (15 - 1) + 1);
  const randomLocationForY = Math.round(Math.random() * (15 - 1) + 1);
  const foodPosition = {
    foodX: 0,
    foodY: 0,
  };
  if (foodPosition.foodX === 0 && foodPosition.foodY === 0) {
    foodPosition.foodX = randomLocationForX;
    foodPosition.foodY = randomLocationForY;
  } else {
    if (randomLocationForY === 1) {
      const repairAppleCoordinates = randomLocationForY;
      const squaryApple = randomLocationForX + repairAppleCoordinates;
      const foodId = "div" + squaryApple.toString();
      const change = <HTMLDivElement>document.getElementById(foodId);
      if (foodId === playerStart) {
        change.classList.remove("food");
        checkIfSnakeOnFood();
      } else if (
        foodPosition.foodX === liveSnakePosition.x &&
        foodPosition.foodY === liveSnakePosition.y
      ) {
        change.classList.remove("food");
        checkIfSnakeOnFood();
      }
      checkIfSnakeOnFood();
    } else {
      const repairAppleCoordinates = randomLocationForY * 15;
      const squaryApple = randomLocationForX + repairAppleCoordinates;
      const foodId = "div" + squaryApple.toString();
      const change = <HTMLDivElement>document.getElementById(foodId);
      if (foodId === playerStart) {
        change.classList.remove("food");
      } else if (
        foodPosition.foodX === liveSnakePosition.x &&
        foodPosition.foodY === liveSnakePosition.y
      ) {
        change.classList.remove("food");
      }
    }
  }
}
