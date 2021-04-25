const readLineSync = require("readline-sync");

const quizTitle = "COVID-19";
const quizDescription =
  "You will be asked 5 question about the COVID-19. \nPlease select response by specifying a b c or d.\n";
const initialGreeting = `***** WELCOME TO ${quizTitle} QUIZ. *****\n`;
const validOptions = ["a", "b", "c", "d", "A", "B", "C", "D"];

console.log(initialGreeting);
console.log(quizDescription);
console.log("PRESS ANY KEY TO START THE QUIZ");
const startingConfirmation = readLineSync.question();

const allQuestions = [
  {
    question:
      "Which international clinical trial is launched by the World Health Organisation (WHO) and partners to help find an effective treatment for COVID-19?",
    options: {
      A: "Solidarity",
      B: "Dissidence",
      C: "Severance",
      D: "Dissension",
    },
    answers: "A",
  },
  {
    question:
      "Name an antiviral medicine used for a clinical trial by Gilead Sciences for COVID-19 treatment?",
    options: {
      A: "Favipiravir",
      B: "Triazavirin",
      C: "Remdesivir",
      D: "None of the above",
    },
    answers: "C",
  },
  {
    question: "Hydroxychloroquine and chloroquine are which type of drugs??",
    options: {
      A: "Antiviral",
      B: "Anti-Malarial",
      C: "Anti-Bacterial",
      D: "None of the above",
    },
    answers: "B",
  },
  {
    question:
      "What is the name of a therapy in which blood is infused from the recovered patients of COVID-19 to other critical COVID-19 patients?",
    options: {
      A: "Convalescent Plasma",
      B: "Plasma Therapy",
      C: "Both A and B",
      D: "Neither A nor B",
    },
    answers: "C",
  },
  {
    question: "For which outbreaks, Convalescent Plasma Therapy is also used?",
    options: { A: "Ebola Virus", B: "SARS", C: "MERS", D: "All the above" },
    answers: "D",
  },
];

const isValidOption = (option) => {
  if (!validOptions.includes(option)) {
    return "Wrong option!, Please enter valid option";
  }
};
let correctAnswerCount = 0;

allQuestions.forEach((question, index) => {
  console.log(index + 1 + " : " + question.question);

  Object.keys(question.options).forEach((key) => {
    console.log(`${key} : ${question.options[key]}`);
  });

  let answer = readLineSync.question();

  let validOption = isValidOption(answer);

  if (validOption) {
    console.log(validOption);
    answer = readLineSync.question("Your Option is: ");
  }

  if (
    question.answers === answer ||
    question.answers === answer.toUpperCase()
  ) {
    console.log("Corrret Answer\n");
    correctAnswerCount += 1;
  } else {
    console.log("Wrong Answer");
    console.log(`Correct Answer is : ${question.answers[0]}\n`);
  }
});

console.log(
  `Your Final Score: ${correctAnswerCount}\n Thank you participating in ${quizTitle}`
);
