let getButton = document.querySelectorAll(".btn");
let getOperator = document.querySelectorAll(".btn-operator");
let getAllButtons = document.querySelectorAll("button");
let getDiv1 = document.querySelector(".one");
let getDiv2 = document.querySelector(".two");
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
    getDiv1.innerText = "";
    getDiv2.innerText = "";
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
        if (number1.length > 15) {
          alert("Can't put more than 15 digits");
        } else {
          number1 += e.target.value;
          if (i === 0) {
            getDiv1.innerText = "";
            getDiv2.innerText = "";
            getDiv1.style.color = "#fff";
            getDiv1.innerText += e.target.value;
            i++;
          } else {
            getDiv1.innerText += e.target.value;
            i++;
          }
        }
      } else if (e.target.classList.contains("equal")) {
        alert("Wrong Operator");
      } else {
        if (i === 0) {
          getDiv1.style.color = "red";
          getDiv1.innerHTML = "Error , click a number";
        } else {
          j++;
          getDiv1.innerText += " ";
          key = e.target.value;

          getDiv1.innerText += key;
          getDiv1.innerText += " ";
        }
      }
    } else {
      if (!e.target.classList.contains("operator")) {
        if (number2.length > 15) {
          alert("Can't put more than 15 digits");
        } else {
          number2 += e.target.value;
          getDiv1.innerText += e.target.value;
          k++;
        }
      } else {
        if (k === 0) {
          alert("Enter a number");
        } else {
          if (e.target.classList.contains("equal")) {
          } else {
            getDiv1.innerText += " ";
            getDiv1.innerText += e.target.value;
            getDiv1.innerText += " ";
          }
          if (e.target.classList.contains("equal")) {
            switch (key) {
              case "+":
                result = parseInt(number1) + parseInt(number2);
                getDiv2.innerText += result;
                reset();
                break;
              case "-":
                result = parseInt(number1) - parseInt(number2);
                getDiv2.innerText += result;
                reset();
                break;
              case "*":
                result = parseInt(number1) * parseInt(number2);
                getDiv2.innerText += result;
                reset();
                break;
              case "/":
                result = parseInt(number1) / parseInt(number2);
                getDiv2.innerText += result;
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
