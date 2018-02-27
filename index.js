function theBeatlesPlay(musicians, instruments) {
  var newarray = [];
  for (var i = 0; i < musicians.length; i++) {
    newarray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newarray;
}

function johnLennonFacts(facts){
  var len = 0;
  var strarray = [];
  while(len < facts.length)
  {
    strarray.push(facts[len] + "!!!")
    len++;
  }
  return strarray;
}

function iLoveTheBeatles(num){
  var array = [];
  do{
    array.push('');
  }while(num < 15);
  
}