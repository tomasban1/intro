/* Boolean logines reiksmes
 -True
 -False

 Boolean logikos operatoriai
 -&& (and)
-|| (or)
-! (not)


*/

const username = "Tomas";
const age = 99
const isSunShining = true;
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);
console.log('-----------');

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('-----------');

// MERGINA
// kada eisiu i pasimatyma?
// - turi buti grazus
// - turi buti jaunas
// - turi buti turtingas

const grazus = true
const jaunas = true
let turtingas = false
const eisiu = grazus && jaunas && turtingas
console.log('>>>', eisiu);

turtingas = true
const eisiu2 = grazus && jaunas && turtingas

console.log('>>>', eisiu2);

console.log(2 + 2 * 2);
console.log((2 + 2) * 2);
console.clear()

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.clear()
console.log('------------');
console.log(true || true && false);
console.log(true || true && true);
console.log(true || false && true); 
console.log(true || false && false);
console.log(false || true && true);
console.log(false || true && false);
console.log(false || false && true);
console.log(false || false && false);

console.log(true && true || false);
console.log(true && true || true);
console.log(true && false || true); 
console.log(true && false || false);
console.log(false && true || true);
console.log(false && true || false);
console.log(false && false || true);
console.log(false && false || false);

//Namu darbas.
console.log('---------');

console.log(true && true && true && true);
console.log(true && true && true && false);
console.log(true && true && false && true);
console.log(true && true && false && false);
console.log(true && false && true && true);
console.log(true && false && true && false);
console.log(true && false && false && true);
console.log(true && false && false && false);
console.log(false && true && true && true);
console.log(false && true && true && false);
console.log(false && true && false && false);
console.log(false && true && false && true);
console.log(false && false && true && true);
console.log(false && false && true && false);
console.log(false && false && false && true);
console.log(false && false && false && false);
console.log('------------');

console.log(true && true && true || true);
console.log(true && true && true || false);
console.log(true && true && false || true);
console.log(true && true && false || false);
console.log(true && false && true || true);
console.log(true && false && true || false);
console.log(true && false && false || true);
console.log(true && false && false || false);
console.log(false && true && true || true);
console.log(false && true && true || false);
console.log(false && true && false || false);
console.log(false && true && false || true);
console.log(false && false && true || true);
console.log(false && false && true || false);
console.log(false && false && false || true);
console.log(false && false && false || false);
console.log('------------');

console.log(true && true || true && true);
console.log(true && true || true && false);
console.log(true && true || false && true);
console.log(true && true || false && false);
console.log(true && false || true && true);
console.log(true && false || true && false);
console.log(true && false || false && true);
console.log(true && false || false && false);
console.log(false && true || true && true);
console.log(false && true || true && false);
console.log(false && true || false && false);
console.log(false && true || false && true);
console.log(false && false || true && true);
console.log(false && false || true && false);
console.log(false && false || false && true);
console.log(false && false || false && false);
console.log('------------');


console.log(true || true && true && true);
console.log(true || true && true && false);
console.log(true || true && false && true);
console.log(true || true && false && false);
console.log(true || false && true && true);
console.log(true || false && true && false);
console.log(true || false && false && true);
console.log(true || false && false && false);
console.log(false || true && true && true);
console.log(false || true && true && false);
console.log(false || true && false && false);
console.log(false || true && false && true);
console.log(false || false && true && true);
console.log(false || false && true && false);
console.log(false || false && false && true);
console.log(false || false && false && false);