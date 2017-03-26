// // // acronyms
// function acronymGen(phrase) {
//   var phraseArray = phrase.split(' ');
//   var acroArray = [];
//
//   for (var i = 0; i < phraseArray.length; i++) {
//      acroArray.push(phraseArray[i][0]);
//   }
//
//   return acroArray.join('');
// }
//
// console.log(acronymGen('Be Right Back'));
//
//
// //scrabble scores
// function scrabbleScore(word) {
//   var wordArray = word.toLowerCase().split('');
//   var sum = 0
//
//   for (var i = 0; i < wordArray.length; i++) {
//     wordArray[i] = wordArray[i].replace('a', '1').replace('e', '1').replace('i', '1')
//     .replace('o', '1').replace('u', '1').replace('r', '1').replace('s', '1')
//     .replace('t', '1').replace('l', '1').replace('n', '1').replace('d', '2')
//     .replace('g', '2').replace('b', '3').replace('c', '3').replace('m', '3')
//     .replace('p', '3').replace('f', '4').replace('f', '4').replace('v', '4')
//     .replace('w', '4').replace('y', '4').replace('k', '5').replace('j', '8')
//     .replace('x', '8').replace('q', '10').replace('z', '10');
//     }
//
//     var wordString = wordArray.join('')
//
//     return wordString
// }

// console.log(scrabbleScore('Grapefruit'));
//
// var letterScores = {
//   a: 1,
//   b: 3,
//   c: 3,
//   d: 2,
//   e: 1,
//   f: 4,
//   g: 2,
//   h: 4,
//   i: 1,
//   j: 8,
//   k: 5,
//   l: 1,
//   m: 3,
//   n: 1,
//   o: 1,
//   p: 3,
//   q: 10,
//   r: 1,
//   s: 1,
//   t: 1,
//   u: 1,
//   v: 4,
//   w: 4,
//   x: 8,
//   y: 4,
//   z: 10
// }
//
// function scrabbleScoreAlt1(word) {
//   if (word === null) return 0;
//
//   var sum = 0;
//   var wordArray = word.toLowerCase().split('');
//
//   for (var i = 0; i < wordArray.length; i++) {
//     sum += letterScores[ wordArray[i] ];
//   }
//
//   return sum;
// }
//
// console.log(scrabbleScoreAlt1(null));


//1. make a funciton that takes a word
//2. have the function determine if it starts with a a vowel or consonant
//  2a. if beings with vowel : add ay to the end
//  2b. if begins with consonant: move first letter of word to end and add ay

var vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true
}

function pigLatinTranslator(word) {
  if (typeof word !== 'string') return 'You must enter a string.';

  var wordArray = word.split(' ');
  var pigLatin;

  if (wordArray.length === 1) {
    wordArray = wordArray[0].split('');

    for (var i = 0; i < wordArray.length; i++) {
      if ( vowels.hasOwnProperty(wordArray[0]) ) {
        wordArray.push('ay');
        break;
      } else {
        wordArray.push(wordArray.shift());
      }
    }

    pigLatin = wordArray.join('');

    return pigLatin;

  } else if (wordArray.length > 1) {
    var newArray = [];

    for (var i = 0; i < wordArray.length; i++) {
      var splitWord = wordArray[i].split('');

      for (var j = 0; j < splitWord.length; j++) {
        if ( vowels.hasOwnProperty(splitWord[0]) ) {
          splitWord.push('ay');
          newArray.push(splitWord);
          break;
        } else {
          splitWord.push(splitWord.shift());
        }
      }
    }
    var solution =  newArray.map(function(item) {
      return item + ' ';
    });

    solution = solution.map(function(item) {
      return item.replace(/,/ig, '');
    })

    return solution.join(',').replace(/,/ig, '');
  }
}

console.log(pigLatinTranslator('bradford is gay'));
