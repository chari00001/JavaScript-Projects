function rot13(str) {
    let decodedResult = "";
    let alphabetStart = "abcdefghijklm".toUpperCase();
    let alphabetEnd = "nopqrstuvwxyz".toUpperCase();
  
    for (let i = 0; i < str.length; i++){
      let letterToDecode = str[i];
      if(alphabetStart.indexOf(letterToDecode) >= 0){
        decodedResult += alphabetEnd[alphabetStart.indexOf(letterToDecode)];
      }
      else if(alphabetEnd.indexOf(letterToDecode) >= 0){
        decodedResult += alphabetStart[alphabetEnd.indexOf(letterToDecode)];
      }
      else {
        decodedResult += letterToDecode;
      }
    }
  
    return decodedResult;
  }
  
  let result = rot13("SERR PBQR PNZC");
  console.log(result);