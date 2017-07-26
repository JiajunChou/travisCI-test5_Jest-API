function randDice(count) {
  var result = [];  
  for(var i = 0; i < count; i++){
    result[i] = Math.floor(Math.random() * 6 + 1);
  }  
  return result;
}

module.exports = randDice;