import "./style.css";

const playground = <HTMLDivElement>document.getElementById("playground");

const position = {
  x: 0,
  y: 0,
};

let playerStart = <HTMLDivElement>document.getElementById("div113");

playerStart = position;

for (let i = 1; i <= 225; i++) {
  const div = document.createElement("div");
  div.id = `div${i.toString()}`;
  playground.appendChild(div);
}

window.addEventListener("keydown", (event) => {
  inputCheck(event.key);
});

function inputCheck(input: string) {
  if (input === "ArrowUp") {
    checkIfBorderCrash();
    position.y += 15;
    console.log(position);
  } else if (input === "ArrowDown") {
    checkIfBorderCrash();
    position.y -= 15;
    console.log(position);
  } else if (input === "ArrowRight") {
    checkIfBorderCrash();
    position.x += 1;
    console.log(position);
  } else if (input === "ArrowLeft") {
    checkIfBorderCrash();
    position.x -= 1;
    console.log(position);
  }
}

function checkIfBorderCrash() {
  if (
    position.x > 6 ||
    position.x < -6 ||
    position.y > 104 ||
    position.y < -104
  ) {
    console.log("You loose");
  }
}
