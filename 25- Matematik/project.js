let button = document.getElementById("button");
let array = [];
let trueArray = ["8", "10", "3", "25"];

button.addEventListener("click", (e) => {
  let sum = 0;
  let form = document.querySelector("form");
  let cevap1 = form.q1.value;
  let cevap2 = form.q2.value;
  let cevap3 = form.q3.value;
  let cevap4 = form.q4.value;

  array[0] = cevap1;
  array[1] = cevap2;
  array[2] = cevap3;
  array[3] = cevap4;

  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === trueArray[i]) {
      sum = sum + 25;
    } else {
      sum = sum + 0;
    }
  }


  let div = document.querySelector("div.result");
  div.classList.remove("d-none");
  let span = document.getElementById("percentage");
  span.innerHTML = sum + "%";
  
  if ((sum == 100)) {
    let div2 = document.querySelector("div.result2");
    div2.classList.remove("d-none");
    button.disabled = true;
  }

  e.preventDefault();
});
