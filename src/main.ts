import "./style.css";

const playground = <HTMLDivElement>document.getElementById("playground");

for (let i = 0; i < 225; i++) {
  const div = document.createElement("div");
  if (i % 2 === 0) {
    div.setAttribute("class", "field1");
  } else {
    div.setAttribute("class", "field2");
  }
  playground.appendChild(div);
}
