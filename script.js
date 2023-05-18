var passLength = 8;
var choice = [];

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","",];
var numbers = ["0","1","2","3","4","5","6","7","8","9",];
var specialCharacters = ["!","@","#","$","%","^","&","*","?",];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
      var Password = generatePassword();
      passwordText.value = Password;
  } 
}

function generatePassword() {
  var password = ("");
  for(var i = 0; i < passLength; i++) {
      var randomizer = Math.floor(Math.random() * choice.length);
      password = password + choice[randomizer]
  }
  return password;

}



function getPrompts(){
  choice = [];

  passLength = parseInt(prompt("How many characters would you like your generated password to be? (Must be bewteen 8 - 128 charcters)"));

  if (isNaN(passLength)) {
    alert("Password length must be wrote as a number,")
    return false;
  }
  if (passLength > 128) {
    alert("Password length must be shorter than 128 characters.")
    return false;
  }
  if (passLength < 8) {
    alert("Password must be greater than 8 characters.")
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    choice = choice.concat(lowerCase);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choice = choice.concat(upperCase);
  }
  if (confirm("Would you like numbers letters in your password?")) {
    choice = choice.concat(numbers);
  }
  if (confirm("Would you like special characters letters in your password?")) {
    choice = choice.concat(specialCharacters);
  }
  return true;
}
