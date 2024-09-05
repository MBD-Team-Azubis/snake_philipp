import "./style.css";

const playground = <HTMLDivElement>document.getElementById("playground");

const position = {
  x: 0,
  y: 0,
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

foodSpawn();

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
}

function move(input: string) {
  if (input === "ArrowUp") {
    checkIfBorderCrash();
    position.y -= 1;
  } else if (input === "ArrowDown") {
    checkIfBorderCrash();
    position.y += 1;
  } else if (input === "ArrowRight") {
    checkIfBorderCrash();
    position.x += 1;
  } else if (input === "ArrowLeft") {
    checkIfBorderCrash();
    position.x -= 1;
  }
  newSnakePosition(input);
}

function checkIfBorderCrash() {
  if (position.x > 6 || position.x < -6 || position.y > 6 || position.y < -6) {
    console.log("You loose");
  }
}

function foodSpawn() {
  const squaryApple = Math.round(Math.random() * 225);
  const foodId = "div" + squaryApple.toString();
  if (foodId === playerStart) {
    foodSpawn();
  }
  const change = <HTMLDivElement>document.getElementById(foodId);
  change.classList.add("food");
}
