const letterToNumberArray = [
  { letter: "A", number: 1 },
  { letter: "B", number: 2 },
  { letter: "C", number: 3 },
  { letter: "D", number: 4 },
  { letter: "E", number: 5 },
  { letter: "F", number: 6 },
  { letter: "G", number: 7 },
  { letter: "H", number: 8 },
  { letter: "I", number: 9 },
  { letter: "J", number: 10 },
  { letter: "K", number: 11 },
  { letter: "L", number: 12 },
  { letter: "M", number: 13 },
  { letter: "N", number: 14 },
  { letter: "O", number: 15 },
  { letter: "P", number: 16 },
  { letter: "Q", number: 17 },
  { letter: "R", number: 18 },
  { letter: "S", number: 19 },
  { letter: "T", number: 20 },
  { letter: "U", number: 21 },
  { letter: "V", number: 22 },
  { letter: "W", number: 23 },
  { letter: "X", number: 24 },
  { letter: "Y", number: 25 },
  { letter: "Z", number: 26 }
];

const letterInput = document.getElementById('letterInput');
const numberOutput = document.getElementById('numberOutput');
const savedMessagesList = document.getElementById('savedMessagesList');
const printButton = document.getElementById('printButton');

// Load the output from localStorage if it exists
if (localStorage.getItem('numberOutput')) {
  numberOutput.value = localStorage.getItem('numberOutput');
}

// Load saved messages from localStorage if they exist
if (localStorage.getItem('savedMessages')) {
  savedMessagesList.innerHTML = localStorage.getItem('savedMessages');
}

letterInput.addEventListener('input', () => {
  const inputText = letterInput.value.trim().toUpperCase();
  let outputText = '';

  // Clear the output textarea
  numberOutput.value = '';

  // Convert input to corresponding number
  for (let i = 0; i < inputText.length; i++) {
      const letter = inputText[i];
      const letterObject = letterToNumberArray.find(item => item.letter === letter);
      if (letterObject) {
          outputText += letterObject.number;
      } else {
          outputText += ' ';
      }
  }

  numberOutput.value = outputText.trim();
});

// Event listener for print button
printButton.addEventListener('click', () => {
  // Save output to localStorage
  localStorage.setItem('numberOutput', numberOutput.value);

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item');
  listItem.textContent = numberOutput.value;

  // Append the new list item to the saved messages list
  savedMessagesList.appendChild(listItem);

  // Save updated saved messages to localStorage
  localStorage.setItem('savedMessages', savedMessagesList.innerHTML);
});