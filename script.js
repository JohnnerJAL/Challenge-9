const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

let counter = 0;

function checkBoxes() {
  
  const scrollY = window.pageYOffset;
  const bottomWindow = window.innerHeight + scrollY;
  
  const controller = counter - bottomWindow;
  counter = bottomWindow;

  let down;
  if (controller < 0) {
    down = true;
    //console.log("scroll down")
  } else {
    down = false;
    //console.log("scroll up")
  }
  
  boxes.forEach(box => {
    const boxPositionVP = box.getBoundingClientRect().bottom;
    const globalPositionBox = boxPositionVP + scrollY;

    if (down && Math.abs(globalPositionBox - bottomWindow) <= 50) {
      box.classList.add("show");
      now = true;
    } else if (!down && Math.abs(globalPositionBox - bottomWindow) <= 50) {
      box.classList.remove("show");
    }
  })
}