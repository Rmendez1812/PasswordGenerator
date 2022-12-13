// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ('abcdefghijklmnopqrstuvwxyz');
var uppercase = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
var number = ('0123456789');
var symbol = ('!#$%&()*+,-./:;<=>?@[\\]^_{|}~');

function generatePassword() {
  var passwordCharSet = "";

  var length = window.prompt("Enter a number from 8 to 128 for password length.");

  var lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    passwordCharSet += lowercase;
  };

  var uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    passwordCharSet += uppercase;
  };

  var symbols = window.confirm("Would you like to use symbols?");
  if (symbols) {
    passwordCharSet += symbol;
  };

  var numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    passwordCharSet += number;
  };
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}

console.log(generatePassword());


// Write password to the #password input
function writePassword() {
  var password = passwordCharSet();
  var passwordText = document.querySelector(generatePassword);

 passwordText.value = generatePassword();



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

