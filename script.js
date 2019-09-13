let questionNumber = 0;
let score = 0;

function renderQuestion() {
  const answers = STORE[questionNumber].answers.map(function (answer) {
	  return `
      <label class="answerOption">
        <input type="radio" name="answer" value="${answer}" required>
        ${answer}
      </label>`;
  }).join(''); 

  return `
    <h2 class="questionTitle">${STORE[questionNumber].question}</h2>
    <form>
      <fieldset>
        ${answers}
      </fieldset>
      <div class="buttonContainer">
        <button type="submit" class="submitButton">Submit</button>
      </div>
    </form>`;
}

function increaseQuestionNumber() {
    questionNumber ++;

    $('.questionNumber').text(questionNumber + 1);
}

function handleStartButton() {
  $('.quizStart').on('click', '.startButton', function(event) {
    $('.quizStart').hide();
    
    $('.questionAnswerForm').html(renderQuestion());

    $('.questionNumber').text(1);
  });
}

function increaseScore() {

  score ++;
  
  $('.score').text(score);
}

function renderCorrectAnswer() {
  $('.questionAnswerForm').html(`
    <h2>Correct!</h2>
    <img class="icon" src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/>
    <div class="buttonContainer">
      <button type="button" class="nextButton">Next</button>
    </div>`);
  increaseScore();
}

function renderIncorrectAnswer() {
  const correctAnswer = `${STORE[questionNumber].correctAnswer}`;

  $('.questionAnswerForm').html(`
    <h2>Incorrect!</h2>
      <p>The correct answer is <span>"${correctAnswer}"</span></p>
      <img class="icon" src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/>
    <div class="buttonContainer">
      <button type="button" class="nextButton">Next</button>
    </div>`);
} 

function renderFeedback() {
  const selected = $('input:checked');
  const answer = selected.val();
  const correctAnswer = `${STORE[questionNumber].correctAnswer}`;

  if (answer === correctAnswer) {
    renderCorrectAnswer();
  } else {
    renderIncorrectAnswer();
  }
}

function handleSubmitButton() {
  $('.questionAnswerForm').on('submit', function(event) {
    event.preventDefault();

    if (event.target.checkValidity()) {
      renderFeedback();
    }
  });
}

function renderResults() {
  return `
    <h2>Results</h2>
      <p>Score: ${score}/${STORE.length}</p>
    <div class="buttonContainer">
      <button type="button" class="restartButton">Restart</button>
    </div>`;
}

function handleNextButton() {
  $('.questionAnswerForm').on('click', '.nextButton', function(event) {

    if (questionNumber < STORE.length - 1) {
      increaseQuestionNumber();

      $('.questionAnswerForm').html(renderQuestion());

    } else {
      $('.questionAnswerForm').html(renderResults());
    };
  });
}

function handleRestartButton() {
  $('.questionAnswerForm').on('click', '.restartButton', function(event) {
    location.reload();
  });
}

function handleButtons() {
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}

$(handleButtons);