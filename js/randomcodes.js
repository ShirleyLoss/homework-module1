/* ------- RANDOM CODES ------ */

// Declare Variables
var code = ''; //to Store generated codes and initialize to empty value
var getCode = ''; //to store entered code
var btnvalue; //for button boolean value
//create variable to hold the type of characters we want to show as codes
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'

// Function to generate combination of characters
function generateCode(){
    // Create variables to store generated codes and the type of characters we want to show as codes
    
    //Generate character nultiple times using a loop
    for (i = 1; i<=8; i++) {
        var char = Math.random()*str.length; //random select a character
        code += str.charAt(char) //accumulate the generated character into a string of 8
    }
    return code; //return the final accumulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton(){
    document.getElementById("submit").disabled = true;
}

//Activate function
disableButton();

