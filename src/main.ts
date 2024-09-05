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

window.addEventListener("keydown", (event) => {
  move(event.key);
});

function newSnakePosition(inputCheck: string) {
  const currentSnake = document.getElementsByClassName("snake");

  for (let k = 0; k < currentSnake.length; k++) {
    currentSnake[k].classList.remove("snake");
    if (inputCheck === "ArrowUp") {
      const storage = playerStart.split("div");
      const nextStorage = storage[1];
      const anotherStorage = parseInt(nextStorage);
      const finalStorage = anotherStorage - 15;
      const overwritten = finalStorage.toString();
      const nextStep = "div" + overwritten;
      const result = <HTMLDivElement>document.getElementById(nextStep);
      result.classList.add("snake");
    }
    if (inputCheck === "ArrowDown") {
      const storage = playerStart.split("div");
      const nextStorage = storage[1];
      const anotherStorage = parseInt(nextStorage);
      const finalStorage = anotherStorage + 15;
      const overwritten = finalStorage.toString();
      const nextStep = "div" + overwritten;
      const result = <HTMLDivElement>document.getElementById(nextStep);
      result.classList.add("snake");
    }
    if (inputCheck === "ArrowRight") {
      const storage = playerStart.split("div");
      const nextStorage = storage[1];
      const anotherStorage = parseInt(nextStorage);
      const finalStorage = anotherStorage + 1;
      const overwritten = finalStorage.toString();
      const nextStep = "div" + overwritten;
      const result = <HTMLDivElement>document.getElementById(nextStep);
      result.classList.add("snake");
    }
    if (inputCheck === "ArrowLeft") {
      const storage = playerStart.split("div");
      const nextStorage = storage[1];
      const anotherStorage = parseInt(nextStorage);
      const finalStorage = anotherStorage - 1;
      const overwritten = finalStorage.toString();
      const nextStep = "div" + overwritten;
      const result = <HTMLDivElement>document.getElementById(nextStep);
      result.classList.add("snake");
    }
  }
}

function move(input: string) {
  if (input === "ArrowUp") {
    checkIfBorderCrash();
    position.y -= 1;
    newSnakePosition(input);
    console.log(position);
  } else if (input === "ArrowDown") {
    checkIfBorderCrash();
    position.y += 1;
    newSnakePosition(input);
    console.log(position);
  } else if (input === "ArrowRight") {
    checkIfBorderCrash();
    position.x += 1;
    newSnakePosition(input);
    console.log(position);
  } else if (input === "ArrowLeft") {
    checkIfBorderCrash();
    position.x -= 1;
    newSnakePosition(input);
    console.log(position);
  }
}

function checkIfBorderCrash() {
  if (position.x > 6 || position.x < -6 || position.y > 6 || position.y < -6) {
    console.log("You loose");
  }
}
