
// var specialCharacters = ["!", "#", "@", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", "/", "<", ">"]

// var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
//  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
//  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



//  var specialCharacters = confirm('Would you like to use special characters?');
//  var numbers = confirm('Would you like to use numbers?');
//  var upperCharacters = confirm('Would you like to use uppercase letters');
//  var lowerCharacters = confirm('Would you like to use lowercase letters');


var passwordLength = prompt("How long do you want your password to be?")

passwordLength.parseInt();

function generate(){


    var complexity = passwordLength;

    //possible password values
    let password = "";

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+<>?";

    

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }

    //add password to texbox/display area
    document.getElementById("password").value = password;

}




//function to copy password to clipboard
function copyPassword(){

document.getElementById("password").select();

document.execCommand("Copy");

alert("Password copied to clipboard");

}

