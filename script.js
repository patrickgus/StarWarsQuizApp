let questionNumber = 0;
let score = 0;

function renderQuestion() {
  return `
    <h2 class="questionTitle">${STORE[questionNumber].question}</h2>
        <form>
          <fieldset>
            <label class="answerOption">
              <input type="radio" name="answer" value="${STORE[questionNumber].answers[0]}" required>
              <span>${STORE[questionNumber].answers[0]}</span>
            </label>
            <label class="answerOption">
              <input type="radio" name="answer" value="${STORE[questionNumber].answers[1]}" required>
              <span>${STORE[questionNumber].answers[1]}</span>
            </label>
            <label class="answerOption">
              <input type="radio" name="answer" value="${STORE[questionNumber].answers[2]}" required>
              <span>${STORE[questionNumber].answers[2]}</span>
            </label>
            <label class="answerOption">
              <input type="radio" name="answer" value="${STORE[questionNumber].answers[3]}" required>
              <span>${STORE[questionNumber].answers[3]}</span>
            </label>
            <button type="button" class="submitButton">Submit</button>
          </fieldset>
        </form>`;
}

function increaseQuestionNumber() {
  $('.questionNumber').text(questionNumber + 1);
}

function handleStartButton() {
  // Hide .quizStart class
  // replace with next question
  // increase questionNumber
  console.log('`handleStartButton` ran');
  $('.quizStart').on('click', '.startButton', function(event) {
    $('.quizStart').hide();
    
    $('.questionAnswerForm').html(renderQuestion());

    increaseQuestionNumber();
  });
}

function handleSubmitButton() {
  // hide question
  // display feedback correct or incorrect
  // change score if feedback is correct
  console.log('`handleSubmitButton` ran');
}

function handleNextButton() {
  // hide feedback
  // display next question (unless last question)
  // increase question number
  // after last question dispay results
  console.log('`handleNextButton` ran');
}

function handleRestartButton() {
  // hide results
  // display start screen
  // change score and question numbers to 0
  console.log('`handleRestartButton` ran');
}

function handleButtons() {
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}

$(handleButtons);