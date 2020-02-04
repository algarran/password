
var passwordLength = prompt("How long do you want your password to be?");

if(passwordLength < 8 || passwordLength > 128 ){
    alert("Not a valid length put select a number between 8 and 128!");
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
    avail += values.substring(26,52);
}
 
if(numbers){
    avail += values.substring(52,62);
}

if(specialCharacters){
    console.log("here")
    avail += values.substring(62);
    console.log(avail)
}



function generate(){

    //possible password values
    let password = "";

    // //create for loop to choose password characters
    for(var i = 1; i <= passwordLength; i++){
        password = password + avail.charAt(Math.floor(Math.random() * (avail.length)));
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

