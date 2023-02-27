////////////////[1] select the element html //////////////////
let duration = 1000;
let btnStart = document.querySelector(".controllers span");
let triesElement = document.querySelector(".game .info .tries span");
let nameTag = document.querySelector(".game .info .name span");
let holder = document.querySelector(".game .holder");
let blocks = Array.from(holder.children);
// console.log(blocks);
/////////////////////////////////////////////////////////////
////////////////[2] on click function take the name and put into html  //////////////////
btnStart.addEventListener("click", (e) => {
  let userName = window.prompt("Enter Your Name");
  if (userName == null || userName == "") {
    nameTag.innerHTML = "unKnown";
  } else {
    nameTag.innerHTML = userName;
  }
  e.target.parentElement.remove();
});
/////////////////////////////////////////////////////////////
////////////////[3] random array contain 0 to 19  //////////////////
let randomArray = [...Array(blocks.length).keys()];
shuffle(randomArray);
// console.log(randomArray);
blocks.forEach((block, index) => {
  block.style.order = randomArray[index];
  block.onclick = function () {
    flip(block);
  };
});

/////////////////////////////////////////////////////////////
////////////////[4] shuffle the random array //////////////////
function shuffle(array) {
  let current = array.length,
    temp,
    random;
  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }
  return array;
}
/////////////////////////////////////////////////////////////
////////////////[5] flip function //////////////////////////
function flip(block) {
  block.classList.add("flipped");
  let flippedCard = blocks.filter((flippedCard) => {
    return flippedCard.classList.contains("flipped");
  });
  if (flippedCard.length == 2) {
    closeFlip();
    if (
      flippedCard[0].getAttribute("data-photo") ==
      flippedCard[1].getAttribute("data-photo")
    ) {
      flippedCard[0].classList.remove("flipped");
      flippedCard[1].classList.remove("flipped");
      flippedCard[1].classList.add("done");
      flippedCard[0].classList.add("done");
      console.log("good");
    } else {
      triesElement.innerHTML = +triesElement.innerHTML + 1;
      setTimeout(() => {
        flippedCard[0].classList.remove("flipped");
        flippedCard[1].classList.remove("flipped");
      }, 1000);
      console.log("bad");
    }
  }
  console.log(flippedCard);
}
/////////////////////////////////////////////////////////////
////////////////[6] close flipping //////////////////
function closeFlip() {
  holder.classList.add("no-Click");
  setTimeout(() => {
    holder.classList.remove("no-Click");
  }, duration);
}
/////////////////////////////////////////////////////////////
