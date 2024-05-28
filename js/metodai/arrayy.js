//array metodai: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const marks = [10, 2, 6, 8, 7];
console.log([...marks].concat([1, 2, 3]));//<--- i array ideda skaiciu
console.log([...marks].concat([1, 2, 3], 4));
console.log([...marks].concat(1, [1, 2, 3]));
console.log([...marks].concat(1, [1, 2, 3], 4));
console.clear();

console.log([...marks].copyWithin());// kopijuoja array viduje
console.log([...marks].fill(999));//pripildo array nurodyta reiksme
console.log([...marks].fill('', 2));

const penkiolikaZuikiu = new Array(15).fill('zuikis');
console.log(penkiolikaZuikiu);

console.log([1, 2, 3].flat());
console.log([1, [2, 5], 2, 3].flat());//atidaro ir sulygina masyvus, esancius masyvo viduje\

console.log([...marks].includes(2));// ismeta boolean reiksme, ar pateikta reiksme yra sitame array.
const du = [2]
console.log([[1], [2], [3], [4]].includes([2]));//false 
console.log([[1], du, [3], [4]].includes(du));//true

console.log([...marks].indexOf('labas'));// jei neranda pateikto dalyko, grazina -1
console.log([...marks].indexOf(10));//jei randa, grazina indexa
console.log([...marks].indexOf(6));
console.log([...marks].indexOf(10, 2));
console.log([...marks, 10].indexOf(10, 2));

const abc = ['a', 'b', 'c', 'd']
console.log([...abc].join());// sujungia array narius i stringa(jie turi buti atskirti kableliais)
console.log([...marks].join());//skliaustuose galima irasyta ka norime panaudoti jungian reiksmes
console.log([...marks].join(', '));
console.log([...marks].join(' xXx '));

console.log([...marks].keys());
console.log([...marks].lastIndexOf(10));//Kaip ir index of, tik is kitos puses
const marks2 = [...marks];
console.log(marks2.pop());//pasalina paskutini elementa is array ir ji grazina
console.log(marks2);

const marks3 = [...marks]//ideda pateikta nari i masyvo gala
console.log(marks3);
console.log(marks3.push(7));
console.log(marks3);

const marks4 = [...marks]
console.log(marks4);
console.log(marks4.unshift(0));
console.log(marks4.unshift(1));
console.log(marks4.unshift(2));
console.log(marks4.unshift(3));
console.log(marks4);

console.log([...marks].reverse());// apsuka array is kitos puses
console.clear();
//sudetingesni array metodai

const a1 = [4, 6, 8, 10]
console.log(a1.map(n => n * 2));
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.length));//map sukuria cikla savyje ir isrenka reiksmes

const firstSymbol = s => s[0];
const lastSymbol = s => s[s.length - 1];
console.log(['Labas', 'rytas', 'Lietuva'].map(firstSymbol));
console.log(['Labas', 'rytas', 'Lietuva'].map(lastSymbol));

const marks1 = [10, 2, 9, 6, 7];
const updatedMarks = marks1.map(n => n + 1 > 10 ? 10 : n + 1);
console.log(updatedMarks);

function increaseMarks(marks) {
    if (marks === 10) {
        return 10
    }
    return marks + 1
}

const updatedMarks2 = marks1.map(increaseMarks);
console.log(updatedMarks2);
console.clear();

const randomNum = [15, -7, 555, -1, 3.14]; //skaiciu isrinkimas su filter
const positiveNumbers = randomNum.filter(n => n >= 0)
console.log(positiveNumbers);
const negativeNumbers = randomNum.filter(n => n < 0)
console.log(negativeNumbers);

console.log('------------------');
const randomData = [14, -3.14, true, 18, undefined, [], false];
//teigiami skaiciai
const ts = randomData
    .filter(n => Number.isInteger(n))
    .filter(n => n > 0);

console.log(ts);
//SORT

const dictionary = ['Labas', 'rytas', 'asla', 'medis', 'zuvis'];
dictionary.sort();
console.log(dictionary);

//jei -1 a eina i prieki
//jei 0 a ir b lieka vietoje
// jei 1 a eina i gala
const jonasMarks = [10, 8, 6, 2, 9];
jonasMarks.sort((a, b) => b - a); // skirstymas didejimo, mazejimo tvarka
console.log(jonasMarks);

const students = [
    { name: 'Jonas', marks: 7 },
    { name: 'Maryte', marks: 9 },
    { name: 'Petras', marks: 5 },
    { name: 'Ona', marks: 2 },
];

students.sort((a, b) => a.marks - b.marks);// rusiavimas pagal pazymius
console.log(students);

function varduPalyginimas(a, b) {
    if (a.name < b.name) {
        return -1
    } else if (a.name === b.name) {
        return 0
    } else {
        return 1
    }
}

students.sort(varduPalyginimas)
console.log(students);