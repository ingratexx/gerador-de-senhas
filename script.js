function generatePassword() {
  var lowercaseChars = "qwertyuiopasdfghjklçzxcvbnm";
  var uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var specialChars = "!@#$%¨&*()_+`{^}>:?<=-[ç~]";
  var numberChars = "1234567890";

  var passwordLengths = {
    easyPassword: 8,
    intermediaryPassword: 12,
    hardPassword: 16,
  };

  var password = "";
  var senhaGerada = "";

  var easyPassword = document.getElementById("easyPassword");
  var intermediaryPassword = document.getElementById("intermediaryPassword");
  var hardPassword = document.getElementById("hardPassword");

  var allChars = "";

  if (easyPassword.checked === true) {
    allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;
    password = generateRandomPassword(allChars, passwordLengths.easyPassword);
  } else if (intermediaryPassword.checked === true) {
    allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;
    password = generateRandomPassword(allChars, passwordLengths.intermediaryPassword);
  } else if (hardPassword.checked === true) {
    allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;
    password = generateRandomPassword(allChars, passwordLengths.hardPassword);
  } else {
    allChars = lowercaseChars + uppercaseChars + numberChars;
    password = generateRandomPassword(allChars, passwordLengths.easyPassword);
  }

  var senhaGeradaInput = document.getElementById("senhaGerada");
  senhaGeradaInput.value = password;
}

function generateRandomPassword(chars, length) {
  var password = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}
