var questions = [
  {
    question: "How many colours of Cavalier are there?",
    answer: "4: Blenheim, black and tan, tri-colour and ruby",
  },

  {
    question: "Which country does the Cavalier originate?",
    answer: "England",
  },

  {
    question: "Which U.S. president had a pet Cavalier?",
    answer: "Ronald Reagan",
  }
];

var correctAnswers = 0;

for (var i = 0; i < questions.length; i++) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question);
  if (response === answer){
    correctAnswers += 1;
  }
}

html = correctAnswers + " correct answers."
document.write(html);

