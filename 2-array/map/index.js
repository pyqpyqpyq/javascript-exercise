export default function numberMapToWord(collection) {
  return collection.map(numberToCharacter);
}

function numberToCharacter(num) {
  // char code of 'a' is 97.
  return String.fromCharCode(96 + num);
}
