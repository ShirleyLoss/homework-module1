// Partner Photos Section
var fileNames = ['bustour', 'cabinrental', 'campingadv', 'collegetours', 'rentalbike', 'tourgroup']; //Declare an array to store image file names
var altNames = ['Partner Bus Tours', 'Partner Cabin Rental', 'Partner Camping Adventure', 'Partner College Tours', 'Partner Bike Rentals', 'Partner Tour Group']; // Declare an array to store image alt names
var photos = []; //Declare an empty array to store image element
var openList = "<li class='partner'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain close list tag
var image; //Declare an empty variable to store the assembled image list codes
var imageList = []; //Declare an empty array to store html list that contain an image
for (i =  0; i<6; i++){
    photos.push("<img src='images/partners/partner-" + fileNames[i] + ".png' alt='" + altNames[i] + "'>");
    image = openList + photos[i] + closeList;
    imageList.push(image);
}

document.getElementById("partners").innerHTML = imageList;