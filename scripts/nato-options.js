const natoPhoneticAlphabet = [
  { letter: "A", word: "Alpha" },
  { letter: "B", word: "Bravo" },
  { letter: "C", word: "Charlie" },
  { letter: "D", word: "Delta" },
  { letter: "E", word: "Echo" },
  { letter: "F", word: "Foxtrot" },
  { letter: "G", word: "Golf" },
  { letter: "H", word: "Hotel" },
  { letter: "I", word: "India" },
  { letter: "J", word: "Juliett" },
  { letter: "K", word: "Kilo" },
  { letter: "L", word: "Lima" },
  { letter: "M", word: "Mike" },
  { letter: "N", word: "November" },
  { letter: "O", word: "Oscar" },
  { letter: "P", word: "Papa" },
  { letter: "Q", word: "Quebec" },
  { letter: "R", word: "Romeo" },
  { letter: "S", word: "Sierra" },
  { letter: "T", word: "Tango" },
  { letter: "U", word: "Uniform" },
  { letter: "V", word: "Victor" },
  { letter: "W", word: "Whiskey" },
  { letter: "X", word: "X-ray" },
  { letter: "Y", word: "Yankee" },
  { letter: "Z", word: "Zulu" }
];

console.log(natoPhoneticAlphabet);

const inputBox = document.getElementById('inputBox');
const outputBox = document.getElementById('outputBox');

inputBox.addEventListener('input', () => {
const inputText = inputBox.value.toUpperCase();
let outputText = '';

for (let i = 0; i < inputText.length; i++) {
  const letter = inputText[i];
  const phoneticWord = natoPhoneticAlphabet.find(item => item.letter === letter);
  if (phoneticWord) {
    outputText += phoneticWord.word + ' ';
  } else {
    outputText += ' ';
  }
}

outputBox.value = outputText.trim();
});