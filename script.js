// Assignment Code
let generateBtn = document.getElementById('generate');
let copyBtn = document.getElementById('copyToClipboard');
let yesLowerCase = document.getElementById('lowerCase');
let yesUpperCase = document.getElementById('upperCase');
let yesNumeric = document.getElementById('numeric');
let yesSpecialChar = document.getElementById('specialChar');
let errorMsgOptions = document.getElementById('errorMsgOptions');
let errorMsgLen = document.getElementById('errorMsgLen');
let passInput = document.getElementById('password');


// data
let lettersLower = 'abcdefghijklmnopqrstuvwxyz';
let lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numericChar = '1234567890';
let specChar =  '!@#$%^&*()-=_+<>?/:;';

//store users length input
function getuserlenInput(passLen) {
  return passLen.value;
}

// Get options 
function getOptions(){
  let passwordOptions = '';
  // if no options are selected give an error msg
  
  if (!yesLowerCase.checked && !yesUpperCase.checked && !yesNumeric.checked && !yesSpecialChar.checked){
    errorMsgOptions.setAttribute('aria-hidden', false);
    errorMsgOptions.textContent = 'You must select at least one option';
  }
  //if passlen is empty display a error
  
  if (!passLen.value) {
    errorMsgLen.setAttribute('aria-hidden', false);
    errorMsgLen.textContent = 'You must select a length.';
  //clears the error msg if they pick a length
  }else {
    errorMsgLen.setAttribute('aria-hidden', true);
    errorMsgLen.textContent = '';
    
  }
  // if lowercase is wanted adds to passwordOptions/clears error msg
  if (yesLowerCase.checked) {
    passwordOptions += lettersLower;
    errorMsgOptions.setAttribute('aria-hidden', true);
    errorMsgOptions.textContent = '';
  }
  // if uppercase is wanted adds to passwordOptions/clears error msg
  if (yesUpperCase.checked) {
    passwordOptions += lettersUpper;
    errorMsgOptions.setAttribute('aria-hidden', true);
    errorMsgOptions.textContent = '';
  }
  // if numeric is wanted adds to passwordOptions/clears error msg
  if (yesNumeric.checked) {
    passwordOptions += numericChar;
    errorMsgOptions.setAttribute('aria-hidden', true);
    errorMsgOptions.textContent = '';
  }
  // if special chars are wanted adds to passwordOptions/clears error msg
  if (yesSpecialChar.checked) {
    passwordOptions += specChar;
    errorMsgOptions.setAttribute('aria-hidden', true);
    errorMsgOptions.textContent = '';
  }
  
  return passwordOptions;
  
}


// Call getOptions and pass in the options that the user selected. 
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
 //onclick takes startPass and gets users length input to make the final password
 //that will be displayed to the user.
generateBtn.addEventListener('click', function(){
  let finalPassword = startPass(getuserlenInput(passLen));
  if (finalPassword){
    passInput.innerHTML = finalPassword;
    document.getElementById('confirmCopy').setAttribute('aria-hidden', true);
  }
  
});

copyBtn.addEventListener('click', function(){
  // Get the text to copy
  let copyText = document.getElementById('password');
  // Select the text
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  // Copy the text inside the text field
  document.execCommand('copy');
  
});




