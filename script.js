// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var special = "!@#$%^&*()_+";
    var numeric = "123456789";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = lowercase.toUpperCase();

    console.log(getRandomValue(special));
    console.log(getRandomValue(numeric));
    console.log(getRandomValue(lowercase));
    console.log(getRandomValue(uppercase));

    console.log(lowercase[Math.floor(Math.random() * lowercase.length)])

    var options = {};

    options.length = parseInt(
        prompt("How many characters would you like your password to be? Please choose between 8 and 128")
    );

    if (options.length < 8 || options.length > 128) {
        alert("Incorrect password length")
        return "Invalid Parameters";
    }

    options.special = confirm("Would you like to use special characters?");
    options.numeric = confirm("Would you like to use numeric characters?");
    options.lowercase = confirm("Would you like to use lowercase characters?");
    options.uppercase = confirm("Would you like to use uppercase characters?");
    console.log(options);

    var password = "";
    for (var i = 0; i < options.length; i++) {
        if (options.special) {
            password += getRandomValue(special);
        }

        if (options.numeric) {
            password += getRandomValue(numeric);
        }

        if (options.lowercase) {
            password += getRandomValue(lowercase);
        }

        if (options.uppercase) {
            password += getRandomValue(uppercase);
        }

    }
    return password.substring(0, options.length);
}


function getRandomValue(str) {
    return str[Math.floor(Math.random() * str.length)];
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
