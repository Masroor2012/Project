const quizData = [
      {
        question: "What is the capital of France?",
        answers: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
      },
      {
        question: "Which planet is known as the Red Planet?",
        answers: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
        correct: 1
      },
      {
        question: "What is the largest mammal?",
        answers: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        correct: 2
      }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion() {
      document.getElementById("score").innerText = "";
      const current = quizData[currentQuestionIndex];
      document.getElementById("question").innerText = current.question;
      const answersContainer = document.getElementById("answers");
      answersContainer.innerHTML = "";
      current.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.innerText = answer;
        btn.onclick = () => selectAnswer(index);
        answersContainer.appendChild(btn);
      });
    }

    function selectAnswer(index) {
      const isCorrect = index === quizData[currentQuestionIndex].correct;
      if (isCorrect) score++;
      document.getElementById("next-btn").style.display = "inline-block";
      Array.from(document.getElementsByClassName("answer-btn")).forEach((btn, idx) => {
        btn.disabled = true;
        btn.style.backgroundColor = idx === quizData[currentQuestionIndex].correct ? '#28a745' : '#dc3545';
      });
    }

    function nextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        showQuestion();
        document.getElementById("next-btn").style.display = "none";
      } else {
        document.getElementById("question").innerText = "Quiz Completed!";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("score").innerText = `Your score: ${score}/${quizData.length}`;
      }
    }

    showQuestion();


// loading animation
setTimeout(() => {
    let anim = document.getElementById('lazy-load')
    anim.style.display = 'none'
}, 5000)