// const button = document.querySelector('button') ilk yöntem
// const button= document.querySelector("#buttonId") ikinci yöntem
// const button = document.querySelector(".buttonClass") üçüncü yöntem

const button = document.getElementById("buttonId"); //dördüncü yöntem

// const button = document.getElementsByClassName('buttonClass')[0]; beşinci yöntem
console.log(button);


//ilk yöntem
button.addEventListener("click", () => {
  console.log("tıklandım");
});

// function add() {
//   console.log("tıklandım");
// }

const liElement = document.querySelectorAll("li");
console.log(liElement);

liElement.forEach((eleman) => {
  eleman.addEventListener("click", (e) => {
    // console.log("tıklandı");
    // console.log(e)
    // console.log(e.target);

    e.target.style.color = "blue";
  });
});

const ulDegerlerim = document.querySelector("ul");
console.log(ulDegerlerim);

liElement.forEach((eleman) => {
  eleman.addEventListener("click", (e) => {
    // console.log("tıklandı");
    // console.log(e)
    // console.log(e.target);

    e.target.remove();
  });
});

button.addEventListener("click", () => {
  const liEleman = document.createElement("li");
  liEleman.textContent = "Javascript";
  ulDegerlerim.append(liEleman);
});
