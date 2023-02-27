////////////////[1] select the element html //////////////////
let btnStart = document.querySelector(".controllers span");
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
////////////////[1] select the element html //////////////////
/////////////////////////////////////////////////////////////
////////////////[1] select the element html //////////////////
/////////////////////////////////////////////////////////////
