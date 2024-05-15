/*
FOR - ciklas(loop)

*/
//prasideda->iki kur->po kiek prideda
for (let i = 0; i < 10; i++) {
    console.log(i);

}
console.log("-----------");
for (let i = 20; i > 10; i--) {
    console.log(i);

}
for (let i = 200; i > 100; i -= 23) {
    console.log(i / 10);

}
console.clear();
const colors = ['white', 'black', 'red', 'green', 'blue', 'violet']


for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[i]);
}

console.log('------------');
for (let i = colors.length - 1; i >= 0; i--); {
    console.log(i, colors[i]);
}


const marks = [10, 5, 8, 4, 2];
let sum = 0;
for (let i = 0; i < marks.length; i++) {

    sum += marks[i]
}
console.log(sum / marks.length);

const jonas = [];
const maryte = [10, 2];
const petras = [9, 8, 7];
const ona = [5, 2, 7, 9, 7];

function marksAverage(marks) {
    if (marks === 0);
    return 'Nera pazymiu'
}
let sum1 = 0;
for (let i = 0; i < marks.length; i++) {
    return sum1 / marks.length;
}
sum += marks[i]
console.log(marksAverage(jonas));
console.log(marksAverage(maryte));
console.log(marksAverage(petras));
console.log(marksAverage(ona));

const text = 'Labas'

