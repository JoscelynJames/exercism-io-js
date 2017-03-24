// // acronyms
function acronymGen(phrase) {
  var phraseArray = phrase.split(' ');
  var acroArray = [];

  for (var i = 0; i < phraseArray.length; i++) {
     acroArray.push(phraseArray[i][0]);
  }

  return acroArray.join('');
}

console.log(acronymGen('Be Right Back'));


//scrabble scores
function scrabbleScore(word) {
  var wordArray = word.toLowerCase().split('');
  var sum = 0

  for (var i = 0; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i].replace('a', '1').replace('e', '1').replace('i', '1')
    .replace('o', '1').replace('u', '1').replace('r', '1').replace('s', '1')
    .replace('t', '1').replace('l', '1').replace('n', '1').replace('d', '2')
    .replace('g', '2').replace('b', '3').replace('c', '3').replace('m', '3')
    .replace('p', '3').replace('f', '4').replace('f', '4').replace('v', '4')
    .replace('w', '4').replace('y', '4').replace('k', '5').replace('j', '8')
    .replace('x', '8').replace('q', '10').replace('z', '10');
    }

    var wordString = wordArray.join('')

    return wordString
}

console.log(scrabbleScore('Grapefruit'));

var letterScores = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
}

function scrabbleScoreAlt1(word) {
  if (word === null) return 0;

  var sum = 0;
  var wordArray = word.toLowerCase().split('');

  for (var i = 0; i < wordArray.length; i++) {
    sum += letterScores[ wordArray[i] ];
  }

  return sum;
}

console.log(scrabbleScoreAlt1(null));
