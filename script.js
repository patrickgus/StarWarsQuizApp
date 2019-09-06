let questionNumber = 0
let score = 0

function handleStartButton() {
  console.log('`handleStartButton` is running');
}

function handleSubmitButton() {
  console.log('`handleSubmitButton` is running');
}

function handleNextButton() {
  console.log('`handleNextButton` is running');
}

function handleRestartButton() {
  console.log('`handleRestartButton` is running');
}

function handleButtons() {
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
  console.log('`handleButtons` is running');
}

$(handleButtons);