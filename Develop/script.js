 var generateBtn = document.querySelector("#generate");
 var uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars="abcdefghijklmnopqrstuvwxyz"
  var numberChars="0123456789";
  var specialChars="!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
 
  var PasswordLength;
  var UpperCase;
  var Numb;
  var SpecialCharacter;
  var LowerCase;

 
 function generatePassword(){
PasswordLength = prompt("Please enter desired password between 8-128 ");
 if( PasswordLength<8){
  alert("length of password must be 8-128 characters")
 }else if (PasswordLength>128){
  alert("length of password must be 8-128 characters")
 }else if (isNaN(PasswordLength)){
  alert("Length invalid. please provide valid password length");
 }
 UpperCase = prompt("Do you want to include uppercase in password Y/N");

  if(UpperCase === "Y"){
  UpperCase =true;
  }else if(UpperCase ==="N"){
  UpperCase = true;
  }else if(UpperCase === null || UpperCase ===""){
  alert("Please choose Y/N");
}else if (UpperCase <"Y"){
  alert("Please input Valid Answer");
 }else if (UpperCase <"N"){
  alert("Please input Valid Answer");
 }

Numb = prompt("Input Y/N if numbers should be included on password");
 if(Numb ==="Y"){
  Numb =true;
 }else if (Numb ==="N"){
  Numb = true;
 }else if(Numb === null || Numb === ""){
  alert("Please choose Y/N")
 }else if (Numb <"Y"){
  alert("Please input Valid Answer");
 }else if (Numb <"N"){
  alert("Please input Valid Answer");
 }

 SpecialCharacter=prompt("Do you want to include Special Characters Y/N");
 if(SpecialCharacter==="y"){
  SpecialCharacter=true;
 }else if(SpecialCharacter ==="N"){
  SpecialCharacter = true;
 }else if(SpecialCharacter === null || SpecialCharacter ===""){
  alert("Please input Y/N")
 }else if (SpecialCharacter <"Y"){
  alert("Please input Valid Answer");
 }else if (SpecialCharacter <"N"){
  alert("Please input Valid Answer");
 }
 

 LowerCase = prompt("Do you want to include Lowercase in password Y/N");

  if(LowerCase === "Y"){
    LowerCase =true;
  }else if(LowerCase ==="N"){
    LowerCase = true;
  }else if(LowerCase === null ||LowerCase ===""){
  alert("Please choose Y/N");
}else if (LowerCase <"Y"){
  alert("Please input Valid Answer");
 }else if (LowerCase <"N"){
  alert("Please input Valid Answer");
 }
 var pass = '';
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '1234567890' + '!@#$%^&()_+~`|}{[]:;?><,./-=';
 for (var i = 0; i <= 128; i++) {
  var char = Math.floor(Math.random() * str.length + 1);
  pass + = str.charAt(char)
}
return pass;
}










var pass = '';
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '1234567890' + '!@#$%^&()_+~`|}{[]:;?><,./-=';
 for (var i = 0; i <= 128; i++) {
  var char = Math.floor(Math.random() * str.length + 1);
  pass += str.charAt(char)
}






  
  
  
//function writePassword() {





console.log(writePassword())

 
function writePassword() {
  console.log(generatePassword())
  //var password = generatePassword();
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