 var generateBtn = document.querySelector("#generate");
 var uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars="abcdefghijklmnopqrstuvwxyz"
  var numberChars="0123456789";
  var specialChars="!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
 
  var PasswordLength;
  var UpperCase;


 // Write password to the #password input

 //let length = prompt ("length must me 8-128 characters ! click OK to continue")

//let uppercase = prompt("uppercase required in password");

  //let lowercase = prompt("Lowercase required in password");
  //let specialcharater = prompt("Special characters required");

 // let number = prompt("Please include numbers in password");

 
 function generatePassword(){
PasswordLength = prompt("Please enter desired password between 8-128 ");
 if( PasswordLength<8){
  alert("length of password must be 8-128 characters")
 }else if (PasswordLength>128){
  alert("length of password must be 8-128 characters")
 }else if (isNaN(PasswordLength)){
  alert("Length invalid. please provide valid password length");
 }
 return;
}
console.log(generatePassword())

function UpperCaseP(){
  UpperCase = prompt("Do you want to include uppercase in password Y/N");

  if(UpperCase === "Y"){
  UpperCase =true;
return UpperCase;


}else if(UpperCase ===null || UpperCase ===""){
  alert("Please choose Y/N");
}return UpperCaseP();
}


  
  
  
function writePassword() {
  var pass = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '1234567890' + '!@#$%^&()_+~`|}{[]:;?><,./-=';
   for (var i = 1; i <= 128; i++) {
    var char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char)
  }
return pass;
}
 

console.log(writePassword())

 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









//prompt the user 
  // a. password length from 8--> 128
  // b. Uppercase, Lowercase, special characters and numbers.

  //2. validate the input 
  // 3.generate password,base on the criteria 
  //4. display generated password on page.