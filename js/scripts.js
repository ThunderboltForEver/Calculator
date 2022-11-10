let getCalculator = document.querySelector(".calculator");
let getButton = document.querySelectorAll(".btn");
let getOperator = document.querySelectorAll(".btn-operator");
let getAllButtons = document.querySelectorAll("button");

let getScreen = document.querySelector(".screen");
let getClear = document.querySelectorAll(".clear");
let number1 = "",
  number2 = "",
  key = "",
  i = 0,
  j = 0,
  k = 0,
  result = 0;

getAllButtons.forEach((item) => {
  item.onclick = () => {
    item.classList.add("change-color");
    setTimeout(() => {
      item.classList.remove("change-color");
    }, 100);
  };
});
getClear.forEach((item) => {
  item.addEventListener("click", () => {
    reset();
    getScreen.innerHTML = "";
  });
});

getButton.forEach((item) => {
  item.onclick = (e) => {
    item.classList.add("change-color");
    setTimeout(() => {
      item.classList.remove("change-color");
    }, 100);
    if (j === 0) {
      if (!e.target.classList.contains("operator")) {
        number1 += e.target.value;
        if (i === 0) {
          getScreen.innerHTML = "";
          getScreen.style.color = "black";
          getScreen.innerHTML += e.target.value;
          i++;
        } else {
          getScreen.innerHTML += e.target.value;
          i++;
        }
      } else if (e.target.classList.contains("equal")) {
        alert("Wrong Operator");
      } else {
        if (i === 0) {
          getScreen.style.color = "red";
          getScreen.innerHTML = "Error , click a number";
        } else {
          j++;
          getScreen.innerHTML += " ";
          key = e.target.value;

          getScreen.innerHTML += key;
          getScreen.innerHTML += " ";
        }
      }
    } else {
      if (!e.target.classList.contains("operator")) {
        number2 += e.target.value;
        getScreen.innerHTML += e.target.value;
        k++;
      } else {
        if (k === 0) {
          alert("Enter a number");
        } else {
          getScreen.innerHTML += " ";
          getScreen.innerHTML += e.target.value;
          getScreen.innerHTML += " ";
          if (e.target.classList.contains("equal")) {
            switch (key) {
              case "+":
                result = parseInt(number1) + parseInt(number2);
                getScreen.innerHTML += result;
                reset();
                break;
              case "-":
                result = parseInt(number1) - parseInt(number2);
                getScreen.innerHTML += result;
                reset();
                break;
              case "*":
                result = parseInt(number1) * parseInt(number2);
                getScreen.innerHTML += result;
                reset();
                break;
              case "/":
                result = parseInt(number1) / parseInt(number2);
                getScreen.innerHTML += result;
                reset();
                break;

              default:
                alert("error");
                break;
            }
          }
          k = 0;
        }
      }
    }
  };
});

function reset() {
  (number1 = ""),
    (number2 = ""),
    (key = ""),
    (i = 0),
    (j = 0),
    (k = 0),
    (result = 0);
}
