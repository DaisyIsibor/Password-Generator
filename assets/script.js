// generating secure password
var generateBtn = document.querySelector("#generate");


  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
//created a function to fit the criteria4r 
function generatePassword() {


    // this is the passowrd length and the prompts to choose number of passowrd not less than 8 or greater than 128
  var length = prompt("Please enter desired password length between 8-128 ");

  if(length < 8) {
   alert("length of password must be 8-128 characters");
   length();
  } else if (length > 128) {
   alert("length of password must be 8-128 characters");
   length();
  } else if (isNaN(length) ) {
   alert("Length invalid. please provide valid password length");
  return;
  
  }
 // below is to confirm the characters/number/ symbol the user want to input on password
  var UpperCase = confirm("Do you want to include uppercase in password Y/N");

  var Numbers = confirm("Include number?");

  var LowerCase = confirm("Do you want to include Lowercase in password Y/N");

   var specialCharacter = confirm("Include special Character?");

   // below defined the characters to make a password.
   var Char = "";
   if(LowerCase) {
    Char += "abcdefghijklmnopqrstuvwxyz";
   }
  
   if (Numbers) {
      Char += "0123456789"; 
   }

   if (specialCharacter) {
    Char += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
   }
  
   if (UpperCase) {
    Char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   }
// This forces user to pick at least one of the criteria above 
   if (Char === "") {
    alert("You must pick at least one criteria.");
    return;
   }
// below is the password generate, below uses random index / Math method to generate random passowrd from the users selection
   var Password = "";
   for (var i = 0;  i < length; i++) {
    var randomIndex = Math.floor(Math.random() * Char.length);
      Password += Char.charAt(randomIndex);
   }
   return Password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);