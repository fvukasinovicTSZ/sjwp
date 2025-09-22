// enkripcija stringa na nacin da se pomakne za 3 mjesta u abecedi

let abc = "abcdefghijklmnopqrstuvwxyz".split("");
let string = "test";

let enc = "";
let dec = "";


function encrypt(string) {
    for (let i = 0; i < string.length; i++) {
        enc += (abc[abc.indexOf(string[i]) + 3]);
    }

    return enc;
}

function decrypt(string) {
    for (let i = 0; i < string.length; i++) {
        dec += (abc[abc.indexOf(string[i]) - 3]);
    }

    return dec;
}

let encrypted = encrypt(string);
let decrypted = decrypt(encrypted);

console.log(encrypted);
console.log(decrypted);