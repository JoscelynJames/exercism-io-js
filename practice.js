function acronymGen(phrase) {
  var phraseArray = phrase.split(' ');
  var acroArray = [];

  for (var i = 0; i < phraseArray.length; i++) {
     acroArray.push(phraseArray[i][0]);
  }

  return acroArray.join('');
}

console.log(acronymGen('Be Right Back'));
