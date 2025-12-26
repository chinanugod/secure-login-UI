document.addEventListener("DOMContentLoaded", () => {
  // ===== STATE =====
  let currentQuestionIndex = 0;
  const userAnswers = new Array(quizData.length).fill(null);

  // ===== ELEMENTS =====
  const questionText = document.getElementById("question-text");
  const optionsForm = document.getElementById("options-form");
  const progressText = document.getElementById("quiz-progress");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // ===== LOAD QUESTION =====
  function loadQuestion() {
    const q = quizData[currentQuestionIndex];

    // Update question text
    questionText.textContent = q.question;

    // Clear options
    optionsForm.innerHTML = "";

    // Render options
    q.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = index;

      // Restore checked answer
      if (userAnswers[currentQuestionIndex] === index) {
        input.checked = true;
      }

      input.addEventListener("change", () => {
        userAnswers[currentQuestionIndex] = index;
      });

      const span = document.createElement("span");
      span.textContent = option;

      label.appendChild(input);
      label.appendChild(span);
      optionsForm.appendChild(label);
    });

    // Progress
    progressText.textContent = `Question ${
      currentQuestionIndex + 1
    } of ${quizData.length}`;

    // Button states
    prevBtn.disabled = currentQuestionIndex === 0;

    nextBtn.textContent =
      currentQuestionIndex === quizData.length - 1
        ? "Submit"
        : "Next";
  }

  // ===== NAVIGATION =====
  prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion();
    }
  });

  nextBtn.addEventListener("click", () => {
    // Require answer before proceeding
    if (userAnswers[currentQuestionIndex] === null) {
      alert("Please select an answer before continuing.");
      return;
    }

    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      submitQuiz();
    }
  });

  // ===== SUBMIT QUIZ =====
  function submitQuiz() {
    let score = 0;

    quizData.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        score++;
      }
    });

    // Save result (optional persistence)
    localStorage.setItem(
      "quizResult",
      JSON.stringify({
        score,
        total: quizData.length,
        date: new Date().toISOString(),
      })
    );

    alert(`Quiz completed! You scored ${score} / ${quizData.length}`);

    // Optional redirect later
    // window.location.href = "dashboard.html";
  }

  // ===== INIT =====
  loadQuestion();
});
