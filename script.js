let input = document.querySelector("input");
let btn = document.querySelector("button");
let todo = document.querySelector(".todo");
let done = document.querySelector(".done");
let list = document.querySelector("ul");
let pError = document.querySelector(".pError");

const addElmToList = () => {
  if (input.value.length > 0 && input.value.length < 10) {
    let li = document.createElement("li");
    li.innerHTML += input.value;
    list.appendChild(li);
    input.value = "";
  } else if (input.value.length > 10) {
    pError.textContent = "it can not be done more than 10 char";
  } else {
    pError.textContent = "something went wrong";
  }
};

btn.addEventListener("click", addElmToList);
