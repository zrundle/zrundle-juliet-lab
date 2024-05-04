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
        outputText += letterObject.number + ' ';
      } else {
        outputText += ' ';
      }
    }
  
    numberOutput.value = outputText.trim();
  });