/*
typeof - duomenu tipo nustatymas
*/
function empty() {

}

console.log(typeof 5);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof '');
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof [5, 2]);
console.log(typeof {});
console.log(typeof empty);

//Kainori patikrinti ar tai masyvas
console.log(Array.isArray());

//Kai reikia suzinoti ar reiksme yran null

if (null === null) {
    console.log('taip');

} else {
    console.log('ne');
}
//number size skaiciavimas

function numberSize(n) {
    const nAsText = '' + n;     // '' + 2 = '2'
    return nAsText.length;
}

console.log(numberSize(2), '-->', 1);
console.log(numberSize(25), '-->', 2);
console.log(numberSize(4895), '-->', 4);

// const a = 1452;
// console.log(a);
// console.log('' + a);
// console.log(a.toString());

// console.log(typeof a);
// console.log(typeof ('Labas' + a));
// console.log(typeof a.toString());

// console.log('' + 'Labas');
// console.log('' + true);
// console.log('' + false);
// console.log('' + []);
// console.log('' + [1, 2, 3]);
// console.log('' + numberSize);

// Kai norite patikrinti ar TAI yra masyvas
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray('labas'));
console.log(Array.isArray(true));
console.log(Array.isArray(empty));

console.log('-----------------');

const tikrinamasDalykas = null;
if (tikrinamasDalykas === null) {
    console.log('taip');
} else {
    console.log('ne');
}

console.clear();

const a = '21562';
console.log(a);

if (typeof a === 'string') {
    console.log('As dirbu su STRING');
} else {
    console.log('As dirbu ne su STRING:');
}

if (typeof a !== 'string') {
    console.log('As dirbu ne su STRING:');
} else {
    console.log('As dirbu su STRING');
}