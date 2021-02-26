
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start -----------------------

  const myQuestions = [
    {
      question: "Q1. What will be the output of the following Java program?",

      answers: {
        a: "Hello",
        b: "World",
        c: "HelloWorld",
        d: "Hello World"
      },
      correctAnswer: "b"
    },

    {
      question: "Q2. What will be the output of the following Java program?",

      answers: {
        a: "A",
        b: "B",
        c: "Compilation Error",
        d: " Runtime Error"
      },
      correctAnswer: "b"
    },

    {
      question: "Q3.  ��������.. exception is thrown when an attempt is made to access an array element beyond the index of the array.",
      
      answers: {
        a: "Throwable",
        b: "Restricted",
        c: "Security",
        d: "ArrayIndexOutofBounds"        
      },
      correctAnswer: "d"
    },
	
	{
      question: "Q4. What will be the output?",

      answers: {
        a: "Error",
        b: "Division by zero",
        c: "Catch block", 
        d: " Division by zero Catch block"        
      },
      correctAnswer: "c"
    },
	
	{
      question: "Q5. The �������. statement can be used to handle an exception that is not caught by any of the previous catch statement.",
      
      answers: {
        a: "throw",
        b: "catch",
        c: "finally",
        d: "try"
      },
      correctAnswer: "c"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();