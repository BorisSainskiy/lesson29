let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let close = document.getElementById("close");
btn.onclick = () => {
  modal.style.display = "block";
};

close.onclick = () => {
  modal.style.display = "none";
};

window.onclick = event => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
