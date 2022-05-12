function telephoneCheck(str) {
    let validatorRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/gm;
    return validatorRegex.test(str);
  }
  
  telephoneCheck("555-555-5555");