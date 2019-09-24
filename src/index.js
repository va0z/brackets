  module.exports = function check(str, bracketsConfig) {

  // your solution
  // console.log(str);
  arrBrackets = [];
  for (j=0; j<bracketsConfig.length; ++j ){
    arrBrackets.push ( bracketsConfig[j].join('') );
    // console.log(arrBrackets[j]);
  } 

  // console.log( str );
  // console.log( arrBrackets.join() );

  let flag=1;
  var fl1=0;
  while (flag > 0) {
    flag=0;
    for ( i=0; i<arrBrackets.length; ++i) {
      fl1  = str.indexOf(arrBrackets[i]);
      if ( flag == 0 && fl1 > -1 ) flag = 1;
      str = str.replace(arrBrackets[i], "");
      // console.log("srt = " + str + " : flag = " + flag);
    }
  }
  // console.log(str);
  if (str.length > 0) return false;
  else return true ;
}
