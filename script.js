// Assignment Code
let generateBtn = document.querySelector('#generate');
let yesLowerCase = document.getElementById('#lowerCase');
let yesUpperCase = document.getElementById('#upperCase');
let yesNumeric = document.getElementById('#numeric');
let yesSpecialChar = document.getElementById('#specialChar');
let errorMessage = document.getElementById('#errorMsg')
let passwordOptions = '';

// data
let lettersLower = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
let lettersUpper = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
let numericChar = '1 2 3 4 5 6 7 8 9 0';
let specChar =  '! @ # $ %  ^ & * ( ) - = _ + < > ? / : ; ';

// call password function
generateBtn.addEventListener ('click', writePassword());

// Get options 

function getOptions(){
  if (!yesLowerCase.checked && !yesUpperCase.checked && !yesNumeric.checked && !yesSpecialChar.checked){
    errorMessage = "You must select at least one option";
  }
  if (yesLowerCase.checked) {
    passwordOptions += lettersLower;
  }
  if (yesUpperCase.checked) {
    passwordOptions += lettersUpper;
  }
  if (yesNumeric.checked) {
    passwordOptions += numericChar;
  }
  if (yesSpecialChar.checked) {
    passwordOptions +=specChar;
  }
  return passwordOptions;
}

function buildPassword(length) {
	let passString = getOptions();
	let passLength = passString.length;

	let result = '';

	for ( let i = 0; i < length; i++ ) {
		result += passString.charAt(Math.floor(Math.random() * passLength));
	}

	return result;
}

// make sure length is selected
function writePassword() {
  if (!passwordLength) {
    errorMessage.innerHTML = "You must select a Password length.";
  }
}




