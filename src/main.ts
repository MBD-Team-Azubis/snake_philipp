import "./style.css";

const playground = <HTMLDivElement>document.getElementById("playground");

let axis = {
  x: 0,
  y: 0,
};

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
    // moveSnake(input);
  } else if (input === "ArrowDown") {
    // moveSnake(input);
  } else if (input === "ArrowRight") {
    // moveSnake(input);
  } else if (input === "ArrowLeft") {
    // moveSnake(input);
  }
}
