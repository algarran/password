// var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
//  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

//  var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
//  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// var specialCharacters = ["!", "#", "@", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", "/", "<", ">"]

// 
// 
// 
var passwordLength = prompt("How long do you want your password to be?");

if(passwordLength < 8 || passwordLength > 128 ){
    alert("Not a valid length put select a number between 8 and 128 ****!");
    }else{
        var upperCase = confirm("Use upper case letters?");
        var lowerCase = confirm("Use lower case letters?");
        var numbers = confirm("Use numbers?");
        var specialCharacters = confirm("Use special characters?");
}

let avail=""
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";


if(upperCase){
    avail += values.substring(0,26);
}

if(lowerCase){
    avail += values.substring(26,26);
}
 
if(numbers){
    avail += values.substring(52,10);
}

if(specialCharacters){
    avail += values.substring(62,10);
}



function generate(){


    //possible password values
    let password = "";

    // while(password.length <= length){
    //     password += avail.charAt(Math.florr(Math.random()* avail.length));
    // }

    

    // //create for loop to choose password characters
    for(var i = 1; i <= passwordLength; i++){
        password = password + avail.charAt(Math.floor(Math.random() * avail.length -1));
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

