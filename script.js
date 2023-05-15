
var passLength = 8;
var choice = [];

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","",];
var numbers = ["0","1","2","3","4","5","6","7","8","9",];
var specialCharacters = ["!","@","#","$","%","^","&","*","?",];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newpassword = generatePassword();
    passwordText.value = newpassword
  } else {
    passwordTest.value = "";
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var password = "";
  for(var i = 0; < characterLength; i++) {
    var random
  }
}


function getPrompts(){
  passLength = parseInt(prompt("How many charcters would you like your generated password to be?" + "Must be bewteen 8 - 128 charcters"));

  if(isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Password must be a number, 8 - 128 characters.")
  }
}