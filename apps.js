let questions = [
   {
      id: "Soal 01",
      question: "Siapakah presiden pertama Indonesia?",
      options: [
         "A. Soekarno",
         "B. Joko Widodo",
         "C. Susilo Bambang Yudhoyono",
         "D. Megawati Sukarnoputri"
      ],
      answer: "A. Soekarno"
   },
   {
      id: "Soal 02",
      question: "Apa nama planet terdekat dari Matahari ?",
      options: [
         "A.Mars",
         "B.Venus",
         "C.Merkurius",
         "D.Jupiter"
      ],
      answer: "C.Merkurius"
   },
   {
      id: "Soal 03",
      question: "Berapakah hasil dari 12 dikalikan dengan 5 ?",
      "options": [
         "A. 50",
         "B. 60",
         "C. 55",
         "D. 45"
      ],
      answer: "B. 60"
   },
   {
      id: "Soal 04",
      question: "Apa nama ilmuwan yang merumuskan hukum gravitasi ?",
      options: [
         "A.Isaac Newton",
         "B.Albert Einstein",
         "C.Galileo Galilei",
         "D.Nikola Tesla"
      ],
      answer: "A.Isaac Newton"
   },
   {
      id: "Soal 05",
      question: " Apa warna langit pada siang hari ?",
      options: [
         "A.Merah",
         "B.Biru",
         "C.Hijau",
         "D.Kuning"
      ],
      answer: "B.Biru"
   }
];

const questionElement = document.getElementById("question");
const optionsElement = document.querySelector(".answer-buttons")
const numberQuestion = document.querySelector(".number-question")
const containerQuestion = document.querySelector(".question")
const closingQuestion = document.querySelector(".closing-question")
const scoreQuestion = document.querySelector(".score")
const alert = document.querySelector(".alert")


let current = 0;
let score = 0;
let correctQuestion = 0
let incorrectQuestion = 0;


function nextQuestion() {
   if (current < questions.length) {
      resetOption()
      displayQuestion(questions[current++])
   } else if (current === questions.length) {
      containerQuestion.style.display = "none"
      closingQuestion.style.display = "block"
   }
}

nextQuestion()

function displayQuestion(question) {
   questionElement.textContent = question.question
   numberQuestion.textContent = question.id

   question.options.forEach(option => {
      const button = document.createElement("button")
      button.textContent = option;
      button.setAttribute("class", "options");
      button.classList.add("btn");
      button.addEventListener("click", function () { checkAnswer(option, question.answer) })
      optionsElement.append(button)
   });
};

function resetOption() {
   while (optionsElement.firstChild) {
      optionsElement.removeChild(optionsElement.firstChild);
   }
};


function checkAnswer(userOption, answer) {
   const options = document.querySelectorAll(".options")
   const correctQuestionTotal = document.querySelector(".correctQuestionTotal");
   const incorretQuestionTotal = document.querySelector(".incorretQuestionTotal");

   // For looping in button options
   options.forEach(option => {
      if (option.textContent === userOption) {
         if (userOption === answer) {
            // style option bgcolor = green
            option.style.backgroundColor = "green";
            // show alert
            displayAlert("Jawaban anda benar", "correct");
            // score question
            score += 20;
            console.log(score)
            scoreQuestion.textContent = `Score : ${score}`;
            // total answer corret question
            correctQuestion++
            correctQuestionTotal.textContent = `Jawaban Yang benar : ${correctQuestion}`;
         } else {
            // button incorrect bgcolor
            option.style.backgroundColor = "red"
            options.forEach(opt => {
               if (opt.textContent === answer) {
                  opt.style.backgroundColor = "green";
               }
            });
            // show alert
            displayAlert("Jawaban anda salah.", "incorrect")
            // total answer incorret question
            incorrectQuestion++
            incorretQuestionTotal.textContent = `Jawaban Yang salah : ${incorrectQuestion}`;
         }
         // style alert
         alert.style.display = "block";
      }

   });
};

function displayAlert(text, content) {
   alert.textContent = text
   alert.classList.add(`answer-${content}`)

   // Remove alert
   setTimeout(() => {
      alert.textContent = "";
      alert.classList.remove(`answer-${content}`);
   }, 1500);
};