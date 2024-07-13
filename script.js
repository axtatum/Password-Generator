const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateButton = document.querySelector(".buttonOne");
/*
Psuedocode: 
- We want to create a function that pulls from the array to 
create a random set of char.
- We then want to take the result of the function 
and have it display on within the password boxes.
*/

function generatePassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

generateButton.addEventListener("click", function() {
    const password = generatePassword(15); 
    document.querySelector(".passwordOne").textContent = password;
});

generateButton.addEventListener("click", function() {
    const password = generatePassword(15); 
    document.querySelector(".passwordTwo").textContent = password;
});
