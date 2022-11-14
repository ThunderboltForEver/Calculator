let getButton = document.querySelectorAll(".btn");
let getOperator = document.querySelectorAll(".btn-operator");
let getAllButtons = document.querySelectorAll("button");
let getDiv1 = document.querySelector(".one");
let getDiv2 = document.querySelector(".two");
let getScreen = document.querySelector(".screen");
let getClear = document.querySelectorAll(".clear");
let number1 = "",
  number2 = "",
  temporaryNumber = "",
  key = "",
  temporaryKey = "",
  i = 0,
  numberOfSections = 0,
  checkIfDataEntered = 0,
  result = 0,
  temporaryResult = 0,
  anotherOperatorEntered = 0,
  temporaryNumberTaken = false;

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
    if (numberOfSections === 0) {
      if (!e.target.classList.contains("operator")) {
        if (number1.length > 14) {
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
          numberOfSections++;
          getDiv1.innerText += " ";
          key = e.target.value;

          getDiv1.innerText += key;
          getDiv1.innerText += " ";
        }
      }
    } else {
      //Section2
      if (!e.target.classList.contains("operator")) {
        if (number2.length > 14) {
          alert("Can't put more than 15 digits");
        } else {
          if (anotherOperatorEntered === 0) {
            number2 += e.target.value;
            getDiv1.innerText += e.target.value;
            checkIfDataEntered++;
          } else {
            checkIfDataEntered++;
            temporaryNumber = e.target.value;
            getDiv1.innerText += temporaryNumber;
            temporaryNumberTaken = true;
          }
        }
      } else {
        if (checkIfDataEntered === 0) {
          alert("Enter a number");
        } else {
          if (e.target.classList.contains("equal")) {
            finalCalculation(key, number1, number2);
          }

          checkIfDataEntered = 0;
        }
      }
    }
  };
});
document.addEventListener("keydown", (e) => {
  getAllButtons.forEach((item) => {
    if (e.key === item.value || (e.key === "Enter" && item.value === "=")) {
      if (numberOfSections === 0) {
        if (!item.classList.contains("operator")) {
          if (number1.length > 14) {
            alert("Can't put more than 15 digits");
          } else {
            number1 += item.value;
            if (i === 0) {
              getDiv1.innerText = "";
              getDiv2.innerText = "";
              getDiv1.style.color = "#fff";
              getDiv1.innerText += item.value;
              i++;
            } else {
              getDiv1.innerText += item.value;
              i++;
            }
          }
        } else {
          if (i === 0) {
            getDiv1.style.color = "red";
            getDiv1.innerHTML = "Error , click a number";
            getDiv2.innerText = "";
          } else if (e.key === "Enter") {
            alert("Wrong Operator");
          } else {
            numberOfSections++;
            getDiv1.innerText += " ";
            key = item.value;
            getDiv1.innerText += key;
            getDiv1.innerText += " ";
          }
        }
      } else {
        //Section2
        if (!item.classList.contains("operator")) {
          if (number2.length > 14) {
            alert("Can't put more than 15 digits");
          } else {
            number2 += item.value;
            getDiv1.innerText += item.value;
            checkIfDataEntered++;
          }
        } else {
          if (checkIfDataEntered === 0) {
            alert("Enter a number");
          } else if (item.value === "=" && e.key === "Enter") {
            finalCalculation(key, number1, number2);
            checkIfDataEntered = 0;
          } else {
            numberOfSections++;
            getDiv1.innerText += " ";
            key = item.value;

            getDiv1.innerText += key;
            getDiv1.innerText += " ";
            checkIfDataEntered = 0;
          }
        }
      }
    }

    if (
      e.key === item.value ||
      (e.key === "Enter" && item.value === "=") ||
      (e.key === "Delete" && item.classList.contains("clear"))
    ) {
      item.classList.add("change-color");
      setTimeout(() => {
        item.classList.remove("change-color");
      }, 100);
    }
    if (e.key === "Delete" && item.classList.contains("clear")) {
      reset();
      getDiv1.innerText = "";
      getDiv2.innerText = "";
    }
  });
});

function finalCalculation(key, number1, number2) {
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
function reset() {
  (number1 = ""),
    (number2 = ""),
    (key = ""),
    (i = 0),
    (numberOfSections = 0),
    (checkIfDataEntered = 0),
    (result = 0),
    (anotherOperatorEntered = 0),
    (temporaryKey = ""),
    (temporaryNumber = ""),
    (temporaryResult = 0),
    (temporaryNumberTaken = false);
}
