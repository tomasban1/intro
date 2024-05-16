/*
ARROW - rodykline funkcija
*/

const a = 5
const b = 8
function name1(a, b) {  //<--Paprastoji funkcija
    return a + b
}
console.log(name1(a, b));


const name2 = function (a, b) { //<--Anonimine funkcija
    return a + b
}
console.log(name2(a, b));

const name3 = (a, b) => a + b //<--Rodykline funkcija, galima naudoti tik
console.log(name3(a, b));     //jei funkcijoje atliekama 1 operacija.
//(istrinama {return})

const name4 = a => a * a //Galima istrinti skliaustus, jei funkcija priima
console.log(name4(a));   //tik viena kintamaji                          