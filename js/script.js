var questions = [
  {
    question: "How many colours of Cavalier are there?",
    answer: "4",
  },

  {
    question: "Which country does the Cavalier originate?",
    answer: "ENGLAND",
  },

  {
    question: "Which U.S. president had a pet Cavalier?",
    answer: "RONALD REAGAN",
  }
];

var correctAnswers = 0;

for (var i = 0; i < questions.length; i++) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question);
  if (response.toUpperCase() === answer){
    alert("Correct! ");
    correctAnswers ++;
  }
  else {
    alert("Incorrect. The answer was " + questions[i].answer);
  }
}

html = correctAnswers + " correct answers."
document.write(html);

