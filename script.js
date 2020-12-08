// Assignment Code
let generateBtn = document.getElementById('generate');
let yesLowerCase = document.getElementById('lowerCase');
let yesUpperCase = document.getElementById('upperCase');
let yesNumeric = document.getElementById('numeric');
let yesSpecialChar = document.getElementById('specialChar');
let errorMsgOptions = document.getElementById('errorMsgOptions');
let errorMsgLen = document.getElementById('errorMsgLen');
let passInput = document.getElementById('password');
let passwordOptions = '';

// data
let lettersLower = 'abcdefghijklmnopqrstuvwxyz';
let lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numericChar = '1234567890';
let specChar =  '!@#$%^&*()-=_+<>?/:;';

function getuserlenInput(passLen) {
  return passLen.value;
}

// Get options 
function getOptions(){
  if (!yesLowerCase.checked && !yesUpperCase.checked && !yesNumeric.checked && !yesSpecialChar.checked){
    errorMsgOptions.setAttribute('aria-hidden', false);
    errorMsgOptions.textContent = 'You must select at least one option';
  }
  if (!passLen.value) {
    errorMsgLen.setAttribute('aria-hidden', false);
    errorMsgLen.textContent = 'You must select a length.';
    
  }else {
    errorMsgLen.setAttribute('aria-hidden', true);
    errorMsgLen.textContent = '';
    
  }
  if (yesLowerCase.checked) {
    passwordOptions += lettersLower;
    errorMsgOptions.setAttribute('aria-hidden', true);
    errorMsgOptions.textContent = '';
  }
  
  if (yesUpperCase.checked) {
    passwordOptions += lettersUpper;
    errorMsgOptions.setAttribute('aria-hidden', true);
    errorMsgOptions.textContent = '';
  }
    
  
  if (yesNumeric.checked) {
    passwordOptions += numericChar;
    errorMsgOptions.setAttribute('aria-hidden', true);
    errorMsgOptions.textContent = '';
  }
  if (yesSpecialChar.checked) {
    passwordOptions += specChar;
    errorMsgOptions.setAttribute('aria-hidden', true);
    errorMsgOptions.textContent = '';
  }
  
  return passwordOptions;
  
}


// Call getOtions and pass in the options that the user selected. 
// 
function startPass(length) {
	let passString = getOptions();
	let passLength = passString.length;

	let randPass = '';
  
	for ( let i = 0; i < length; i++ ) {
		randPass += passString.charAt(Math.floor(Math.random() * passLength));
  }
  
  return randPass;
}
 
generateBtn.addEventListener('click', function(){
  let finalPassword = startPass(getuserlenInput(passLen));
  if (finalPassword){
    passInput.innerHTML = finalPassword;
    
  }
  
});





