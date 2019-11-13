let trafficLight = () => {
  for (let i = 0; i < 3; i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    document.body.appendChild(circle);
  }
  let el = document.querySelector("div");
  el.classList.add("green");
};

let changeColor = () => {
  let dives = document.querySelectorAll("div");
  let arr = ["green", "yellow", "red"];
  for (let i = 0; i < 3; i++) {
    if (i == 2) {
      dives[i].classList.remove(arr[i]);
      dives[0].classList.add("green");
    } else if (dives[i].className.includes(arr[i])) {
      dives[i].classList.remove(arr[i]);
      dives[i + 1].classList.add(arr[i + 1]);
      return;
    }
  }
};
trafficLight();
let button = document.createElement("button");
button.innerText = "Change color";
document.body.appendChild(button);
button.setAttribute("onClick", "changeColor()");
