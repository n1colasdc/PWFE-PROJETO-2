/*const key = 5;
const message = document.getElementById("valor").value;
const encrypted = CaesarCrypher(message,key);
console.log (encrypted);
console.log (CaesarCrypher(encrypted, - key));

function CaesarCrypher (message, key) {
    let newMessage = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //message = message.toLowerCase();

    if (key <0) CaesarCrypher(message, key + 26);

    for (const char of message){
        let newChar = char;
        const charIndexAlphabet = alphabet.indexOf (char);  
        if (charIndexAlphabet >= 0) {
            newChar = alphabet.charAt((charIndexAlphabet + key)%26);
             newMessage = newChar;
        }
    }

    return newMessage;


    
}*/

function criptar(){
    let texto = document.getElementById ("valor").value.toLowerCase();

let text = texto

.replace (/e/g,"00")
.replace (/i/g,"11")
.replace (/a/g,"22")
.replace (/o/g,"33")
.replace (/u/g,"44");

    let para = document.createElement("p");
    let node = document.createTextNode(text);
    para.appendChild(node);
    let element = document.getElementById("pro");
    element.appendChild(para);
}

function desencriptar(){

let texto = document.getElementById ("valor").value.toLowerCase();
let text = texto

.replace (/00/g,"e")
.replace (/11/g,"i")
.replace (/22/g,"a")
.replace (/33/g,"o")
.replace (/44/g,"u")
;


    let para = document.createElement("p");
    let node = document.createTextNode(text);
    para.appendChild(node);
    let element = document.getElementById("pro");
    element.appendChild(para);


}
 

