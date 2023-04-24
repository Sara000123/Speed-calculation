// Timer
const timerText = document.getElementById("timer-text");
const btnStart = document.getElementById("start-button");
let count=0;
btnStart.addEventListener("click", function () {
    const intervalId = setInterval(function () {
        count += 1;
        timerText.textContent = count;
    }, 1000);
    console.log(intervalId);

    if (timerText < 0) {
        clearInterval(myfunc);
        document.getElementById("end").innerHTML = "TIME UP!!";
    }

    let timeOutVar;
    const myFunc = (terminator = false) => {
        if (terminator) {
            clearTimeout(timeOutVar);
        } else {
            timeOutVar = setTimeout(myFunc, 1000);
        }
    };
    myFunc(true);
    myFunc(false);
});

var tempResult = 1.01;

function doMath(x, y, z) {
    switch (x) {
        case "+":
            return y + z;
        case "-":
            return y - z;
    }
}


function submitAnswer(result) {
    document.querySelector("#mathForm").addEventListener("submit", function(e) {
        e.preventDefault();
        var userAnswer = document.querySelector("#answerInput").value;
        var bool = (result == userAnswer) ? true : false;


        if (bool === true) {
            // Set color to green for success
            document.body.style.backgroundColor = "#39ce62";
            setTimeout(function() {
                document.body.style.backgroundColor = "#333";
            }, 1000);
            // Clear input field
            document.querySelector("#answerInput").value = "";
            // Ask a new question
            for (let i=0;i<=2;i++)
            {
                randomCreator();
            }
        } else {
            // Set color to red for failure
            document.body.style.backgroundColor = "#ee2336";
            setTimeout(function() {
                document.body.style.backgroundColor = "#333";
            }, 1000);
        }
    });
}

function randomCreator() {

    // Set up the random numbers and operator
    var operators = ["+", "-"];
    var randomIntOne = parseInt((Math.random() * 100), 10);
    var randomIntTwo = parseInt((Math.random() * 100), 10);


    var randomOperator = operators[Math.floor(Math.random() * operators.length)];

    // Create the question text and set it in the document
    var el = document.querySelector(".questionText");
    el.innerHTML = ("").concat(randomIntOne, " ", randomOperator, " ", randomIntTwo);

    // Do the math and round floats to two decimals
    var preliminaryResult = doMath(randomOperator, randomIntOne, randomIntTwo);
    var isFloat = (!Number.isInteger(preliminaryResult)) ? true : false;
    var result = (isFloat === true) ? preliminaryResult.toFixed(2) : preliminaryResult;
    tempResult = result;

    // Set event listener for the form based on browser type
    var userAnswerInput = document.querySelector("#answerInput");
    if (userAnswerInput.addEventListener) {
        userAnswerInput.addEventListener("submit", submitAnswer(result), false);
    } else if (userAnswerInput.attachEvent) {
        userAnswerInput.attachEvent("onsubmit", submitAnswer(result));
    }

    return result;

}
