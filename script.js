// Assignment Code
let generateBtn = document.querySelector('#generate');
let yesLowerCase = document.getElementById('lowerCase');
let yesUpperCase = document.getElementById('upperCase');
let yesNumeric = document.getElementById('numeric');
let yesSpecialChar = document.getElementById('specialChar');
let errorMessage = document.getElementById('errorMsg')
let passwordOptions = '';
// arrays
let lettersLower = ['a b c d e f g h i j k l m n o p q r s t u v w x y z'];
let lettersUpper = ['A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'];
let numericChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let specChar =  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '<', '>', '/', '?'];

//Make sure a checkbox is selected/add selection to the password maker
function addPWOptions(){
  if (!lettersLower && !lettersUpper && !numericChar && !specChar){
    errorMessage.textContent = 'You must select at least one option.';
  }
  if (yesLowerCase === true) {
    passwordOptions += lettersLower.split('');
  }
  if(yesUpperCase === true) {
    passwordOptions +=lettersUpper.split(' ');
  }
  if(yesNumeric === true) {
    passwordOptions += numericChar;
  }
  if(yesSpecialChar === true) {
    passwordOptions += specChar;
  }
  return passwordOptions;
}

// Write password to the #password input
function writePassword() {
  let password = addPWOptions();
  let passwordText = document.querySelector('#password');
  let finalPassword = '';

  for (let i = 0, )

  passwordText.value = finalPassword;

}

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);

