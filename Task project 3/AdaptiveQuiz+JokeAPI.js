//  fetch('https://official-joke-api.appspot.com/jokes/random')

//Quiz Material:

const QuizData = [
    {
        Question: "What Colour of Rose?",
        Answer: [
            "White",
            "Yellow",
            "Red",
            "Black",
        ],
        correct: "Rose"
    },

    {
        Question: "Who is the Father of The Whole Universe?",
        Answer: [
            "Brahma",
            "Vishnu",
            "Mahesh",
            "Mata Adishakti",
        ],
        correct: "Mata Adishakti"
    },

    {
        Question: "If we feel Disappoint at a moment in our Life, then Which Persons Help most?",
        Answer: [
            "God",
            "Close friend",
            "Parents",
            "all of these",
        ],
        correct: "all of these"
    },

    {
        Question: "Why we happy?",
        Answer: [
            "In Mostly Cases 'We hiding our sadness' ",
            "Buy a Car",
            "option 1 wrong",
            "Everyone happy then we happy!",
        ],
        correct: "In Mostly Cases 'We hiding our sadness' "
    },

    {
        Question: "what is 'Life'? ",
        Answer: [
            "Life is Connected with death",
            "Life is a harsh truth (कठोर सत्य) ",
            "Life is happiness!",
            "None of Above",
        ],
        correct: "Life is a harsh truth (कठोर सत्य) "
    },
];

//Logic Build:-

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("Question");
const answersEl = document.getElementById("Answer");
const nextBtn = document.getElementById("btn1");
const scoreEl = document.getElementById("score");
const reatmpt = document.getElementById("againtry");

function showQuestion() {
    const current = QuizData[currentIndex];
    questionEl.textContent = current.Question;
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = "";

    current.Answer.forEach((answer) => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(answer);
        answersEl.appendChild(btn);
    });

    nextBtn.style.display = "none";
    scoreEl.textContent = "";
}

function checkAnswer(selected) {
    const correct = QuizData[currentIndex].correct;
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach((btn) => {
        btn.disabled = true;
        if (btn.textContent === correct) {
      btn.style.backgroundColor = "#c3fcb3";
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "#ff8d7a";
    }
  });

  if (selected === correct) {
    score++;
  }

  nextBtn.style.display = "inline-block";
  reatmpt.style.display = "none";

}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < QuizData.length) {
    showQuestion();
  } else{
    showScore();
  }
});

reatmpt.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  scoreEl.textContent = "";
  reatmpt.style.display = "none";
  showQuestion();
});

function showScore() {
    questionEl.textContent = "Quiz Completed!";
    answersEl.innerHTML="";
    nextBtn.style.display = "none";
    reatmpt.style.display ="inline-block";
    scoreEl.textContent=`Your Score: ${score}/${QuizData.length}`;
}

showQuestion();

//..............................*.................................*...............................
//joke material:-

const jokeBtn = document.getElementById("btn2");
const jokeSetup = document.getElementById("joke-setup");
const jokePunchline = document.getElementById("joke-display");

jokeBtn.addEventListener("click", async () => {
  jokeSetup.textContent = "Loading joke...";
  jokePunchline.textContent = "";

  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    jokeSetup.textContent = data.setup;
    jokePunchline.textContent = data.punchline;
  } catch (error) {
    jokeSetup.textContent = "Failed to load joke.";
    jokePunchline.textContent = "";
  }
});
