// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
// References our HTML button
var generateBtn = document.querySelector("#generate");
// Creating Arrays and values
var specialChar= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?"];
var numberChar= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerChar= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



function generatePassword() {
  var passwordLength=prompt("Choose the length of your password between 8 and 128 characters long.");
  if (isNaN(passwordLength) === true) {
    alert("The passsword length must be a number");
    return;
  };
  if (passwordLength < 8 || passwordLength > 128){
    alert("The password length must be between 8 and 128 characters");
    return ;
  }

  var useSpecial=confirm("Would you like to use special characters?");
  var useNumber=confirm("Would you like to use numbers?");
  var useLower=confirm("Would you like to you lowercase letter?");
  var useUpper=confirm("Would you like to use uppercase letters?");

  var approvedArray = [];
// connect the characters, numbers, upper/lowercase letters when chosen
  if (useSpecial) {
    approvedArray = approvedArray.concat(specialChar);
  }
  if (useNumber) {
    approvedArray = approvedArray.concat(numberChar);
  }
  if (useLower) {
    approvedArray = approvedArray.concat(lowerChar);
  }
  if (useUpper) {
    approvedArray = approvedArray.concat(upperChar);
  }

  // for loop with getRandom function to create new random password 
  var newPassword = "";

  for (var i=0; i < passwordLength; i++){
    var character = getRandom(approvedArray);
    newPassword = newPassword + character;  
  }
  
 return newPassword;
}

// Returns a random item from an array
function getRandom(array) {
  var arrayLength = array.length;
  var random = Math.floor(Math.random() * (arrayLength));
  return array[random];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
