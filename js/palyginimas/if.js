/*
IF - palyginimas

Palyginimo operatoriai:
-visi:<, >, <=, >=, ==, !=, ===, !==
-naudotini:<, >, <=, >=, ===, !==
-nenaudotini:==, !=

Sablonai:
if() {}
if() {} else {}
if() {} else {} if() {}
if() {} else {} if() {} else {}
if() {} else {} if() {} else {} if(){}
*/

const age = 99;
const ageLimit = 18;

if(age < ageLimit){
    console.log('Sorry, bet esi per jaunas');

} else {
    console.log('Uzeik ir pasismagink');

}

if(4 !== 2){
    console.log('Taip, duagiau');
}else {
    console.log('Ne, maziau');
}
console.clear()

const color = 'white'
const color2 = 'red'
const color3 = 'yellow'
const color4 = 'velvet'
const color5 = 'green'
const color6 = 'blue'

function colorTranslation(color){
     let translation = "";

    if(color === 'red'){
    translation = 'Raudona';
}
    else if(color === 'blue'){
    translation = 'Melyna';

}   else if(color === 'green'){
    translation = 'Zalia';

}   else if (color === 'white'){
    translation = 'balta';
}   else {
    translation - '...'
}
  
    return color + '--->', translation;

    
}
console.log(colorTranslation('red'));
console.log(colorTranslation('white'));
console.log(colorTranslation('yellow'));
console.log(colorTranslation('velvet'));
console.log(colorTranslation('green'));
console.log(colorTranslation('blue'));