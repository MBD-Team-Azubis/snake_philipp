import "./style.css";

const playground = <HTMLDivElement>document.getElementById("playground");

let liveSnakePosition = 113;
const snakeTracker = {
  x: 8,
  y: 8,
};

function renderingPlayfield() {
  for (let i = 1; i <= 225; i++) {
    if (i === liveSnakePosition) {
      const div = document.createElement("div");
      div.id = `div${i.toString()}`;
      div.className = "snake";
      playground.appendChild(div);
    } else {
      const div = document.createElement("div");
      div.id = `div${i.toString()}`;
      playground.appendChild(div);
    }
  }
  window.addEventListener("keydown", (event) => {
    move(event.key);
  });
}

renderingPlayfield();
newFoodLocation();

function move(input: string) {
  if (input === "ArrowUp") {
    liveSnakePosition -= 15;
    snakeTracker.y -= 1;
    renderingPlayfield();
  } else if (input === "ArrowDown") {
    liveSnakePosition += 15;
    snakeTracker.y += 1;
    renderingPlayfield();
  } else if (input === "ArrowRight") {
    liveSnakePosition += 1;
    snakeTracker.x += 1;
    renderingPlayfield();
  } else if (input === "ArrowLeft") {
    liveSnakePosition -= 1;
    snakeTracker.x -= 1;
    renderingPlayfield();
  }
  // newSnakePosition(input);
  console.log(liveSnakePosition);
  console.log(snakeTracker);
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

function newFoodLocation() {
  const randomLocationForX = Math.round(Math.random() * (15 - 1) + 1);
  const randomLocationForY = Math.round(Math.random() * (15 - 1) + 1);
  const foodPosition = {
    foodX: randomLocationForX,
    foodY: randomLocationForY,
  };

  if (randomLocationForY === 1) {
    const squaryApple = randomLocationForX;
    const foodId = "div" + squaryApple.toString();
    const change = <HTMLDivElement>document.getElementById(foodId);
    change.classList.add("food");
  } else {
    const repairAppleCoordinates = randomLocationForY * 15;
    const squaryApple = randomLocationForX + repairAppleCoordinates;
    const foodId = "div" + squaryApple.toString();
    const change = <HTMLDivElement>document.getElementById(foodId);
    change.classList.add("food");
  }

  const checkList = document.querySelectorAll(".food");
  console.log(checkList);
  console.log(foodPosition);
}

// if (
//   liveSnakePosition.x === foodPosition.foodX &&
//   liveSnakePosition.y === foodPosition.foodY
// ) {
//   if (randomLocationForY === 1) {
//     const repairAppleCoordinates = randomLocationForY;
//     const squaryApple = randomLocationForX + repairAppleCoordinates;
//     const foodId = "div" + squaryApple.toString();
//     const change = <HTMLDivElement>document.getElementById(foodId);
//     change.classList.remove("food");
//     foodPosition.foodX = 0;
//     foodPosition.foodY = 0;
//     foodCounter += 1;
//   } else {
//     const repairAppleCoordinates = randomLocationForY * 15;
//     const squaryApple = randomLocationForX + repairAppleCoordinates;
//     const foodId = "div" + squaryApple.toString();
//     const change = <HTMLDivElement>document.getElementById(foodId);
//     change.classList.remove("food");
//     foodPosition.foodX = 0;
//     foodPosition.foodY = 0;
//     foodCounter += 1;
//   }
// }
