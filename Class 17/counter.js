let count = 0;

function increment() {
  // alert('clicked')
  // console.log("clicked")
  if (count < 10) {
    ++count;
  } else {
    alert('count can not be bigger than 10')
  }

  display.innerText = count;
  return
}

function decrement() {
  if (count <= 0) {
    alert("Can't be less than 0");
  } else {
    --count;
  }

  display.innerText = count;
  return
}

const display = document.getElementById("counter");

const incBtn = document.getElementById("increment");

const decBtn = document.getElementById("decrement");

incBtn.addEventListener("click", increment);

decBtn.addEventListener("click", decrement);
// decBtn.addEventListener
