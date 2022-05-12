function palindrome(str) {

    let regex = /\W+|_+/g;
  
  
    // Removes all non-alphanumerics and makes string lowercase
    str = str
            .replace(regex,"")
            .toLowerCase();
    // ---------------------------------------------------------
  
    // Adds all characters of string to an array and asigns the length of the array to a variable 
    let strArr = str.split("");
    let strArrLen = strArr.length;
    // ---------------------------------------------------------
  
  
  
    // Flag initialization
    let flag = 1;
    // -------------------
  
    // Palindrome checker if string length is even.
    if (strArrLen % 2 === 0){
      for (let i = 0; i < strArrLen/2; i++){
        if(strArr[i] !== strArr[strArrLen - i - 1]){
          flag = 0;
        }
      }
    }
    // ---------------------------------------------
  
    // Palindrome checker if string length is odd.
    if (strArrLen % 2 === 1){
      for (let i = 0; i < (strArrLen + 1)/2; i++){
        if(strArr[i] !== strArr[strArrLen - i - 1]){
          flag = 0;
        }
      }
    }
    // ---------------------------------------------
  
    // Flag control
    if(flag == 1){
      console.log("This string is palindrome.");
      return true;
    }
    if (flag == 0){
      console.log("This string is not palindrome.");
      return false;
    }
    // ---------------------------------------------
  
  }
  
  palindrome("oddo");