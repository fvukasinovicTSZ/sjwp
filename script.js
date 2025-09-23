/*
smaoglasnik
suglasnik
brojevi
znakovi
veliki brojevfi ostaju veliki mali mali
 */

const samoglasnik = [97, 101, 105, 111, 117];

let string = "aeioub";


function encrypt(string){
    let encrypted = "";

    for (let i = 0; i < string.length; i++){
        let fromAscii = string[i].charCodeAt();

        if (samoglasnik.includes(fromAscii)) {
            encrypted += String.fromCharCode(fromAscii + 5);
        }

        else {
            encrypted += String.fromCharCode(fromAscii + 7);
        }

    }

    return encrypted
}


function decrypt(string){
}


console.log(encrypt(string));