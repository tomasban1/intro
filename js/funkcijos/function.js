/*
Perpanaudojama logika (visos funkcijos grazina rezultata)
() - parametru blokas
{} - logikos blokas
Input => function() => output
*/

function funkcijosPavadinimas () {

}
const a = funkcijosPavadinimas();
console.log(a);

function naujas ()  {
return undefined;
}
console.log(naujas());

function giveMeFive () {
    return 5;
}

console.log(giveMeFive());

/* 
input:
Name: Petras
Surname: Petraitis
output: :Laba diena, as Petras Petraitis!

*/
function intro() {
    return 'Laba diena, as Petras Petraitis!';
}
console.log(intro());

function intro(name, surname){
    return 'Laba diena, as esu ' + name +  ' ' + surname;

}
console.log(intro('Jonas', 'Jonaitis'));
/*
Input
Pirmas skaicius 5
Antras skaicius 7
OutpuT 35
*/

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber
}
console.log(multiply(5, 7));
console.log(multiply(-4, 5));
console.log(multiply(3.14, 5));

//Mano vardas Tomas, man 27 metai ir as megstu cepelinus.
//Mano vardas Agne, man 20 metu ir as megstu saldumynus.
function iLike(name, age, item){
    return 'Mano vardas yra ' + name + ', man '  + age + ' metai ir as megstu ' + item +'.';
//'Mano vardas Name, man XX metu ir as megstu item.'
}
console.log(iLike('Tomas', '27', 'cepelinus'));
console.log(iLike('Agne', '20', 'saldumynus'));


function price(value){
    const PVM = 21; 
    const priceIncrease = 1 + PVM / 100;
    const priceForSale = value * priceIncrease;
    return priceForSale

}
console.log(price(100));
console.log(price(150));

//Zodis, zodis, zodis

function words(w1, w2, w3){

    let sentance = 'Dictionary: ';
    sentance += w1;
    sentance += ', ';
    sentance += w2;
    sentance += ', ';
    sentance += w3;
    sentance += '.';
    return sentance
    
}
    
    console.log(words('Labas', 'rytas', 'Lietuva'));


    const mantai = "Mantas"
    function vardas(name){

    return console.log(`Labas ${name}`);
    }

    vardas("Mantai")

    const baniau = "Banius"

    function surname(pavarde){

        return console.log(`Labas ${pavarde}`);

    }

        surname("Baniau")



function doSomething(params) {
    // 1) Input (parametru) validavimas
    // 2) Vykdome logika
    // 3) Gauto rezultato validavimas
    // 4) Graziname rezultata
}
        

        


    




    

