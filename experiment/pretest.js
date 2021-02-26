
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




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Q1. When doesExceptions in Java arises in code sequence?",
      answers: {
        a: "Run Time",
        b: "Compilation Time",
        c: " Can Occur Any Time",
        d: "None of the mentioned"
      },
      correctAnswer: "a"
    },

    {
      question: "Q2.Which of these keywords is not a part of exception handling?",
      answers: {
        a: "try",
        b: "finally",
        c: "thrown",
        d: "catch"
      },
      correctAnswer: "c"
    },

    {
      question: "Q3. Which of these keywords must be used to monitor for exceptions?",
      answers: {
        a: "try",
        b: "finally",
        c: "throw",
        d: "catch"
      },
      correctAnswer: "a"
    },
	
	{
      question: "Q4. Which of these keywords is used to manually throw an exception?",
      answers: {
        a: "try",
        b: "finally",
        c: "throw",
        d: "catch"
      },
      correctAnswer: "c"
    },
	
	{
      question: "Q5. Which of these keywords must be used to handle the exception thrown by try block in some rational manner?",
      answers: {
        a: "try",
        b: "finally",
        c: "throw",
        d: "catch"

      },
      correctAnswer: "d"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
