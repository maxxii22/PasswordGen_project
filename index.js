const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7",
 "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
 "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

var boxoneEl =  document.getElementById("boxOne");
var boxTwoEl = document.getElementById("boxTwo")


function genbtn() {
     var result = "";
     var resultTwo = "";

     for(let i = []; i < 9; i++) {
         let randomNum = Math.floor(Math.random() * characters.length);
         let randomNumTwo = Math.floor(Math.random() * characters.length);

         result += characters[randomNum]+" ";
         resultTwo += characters[randomNumTwo]+" ";

         //console.log(characters[randomNum])
     } 

     boxoneEl.textContent = result;
     boxTwoEl.textContent = resultTwo;
   
}
