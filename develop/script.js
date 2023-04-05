// define character sets for password generation
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// prompt the user for password criteria
var length = parseInt(prompt("Enter the desired length of your password (between 8 and 128 characters):"));
var includeLowercase = confirm("Include lowercase characters?");
var includeUppercase = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

// generate password based on criteria
var characters = "";
if (includeLowercase) {
  characters += lowercase;
}
if (includeUppercase) {
  characters += uppercase;
}
if (includeNumeric) {
  characters += numeric;
}
if (includeSpecial) {
  characters += special;
}

var password = "";
for (var i = 0; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  password += characters[randomIndex];
}

// display the password to the user
alert("Your password is: " + password);
