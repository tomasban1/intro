const matrix = [10, 2, 8, 4, 6];

for (i = 0; i < matrix.length; i++) {

    console.log(i, '-', matrix[i]);
}

const students = [
    [10, 5, 9, 8],
    [9, 9, 9, 9, 8],
    [10, 6, 4, 5, 8, 10],
    [4, 5, 7, 8, 2, 5, 10, 8]
]
//jonas
const jonoPazymiai = students[0]
console.log(jonoPazymiai);
for (i = 0; i < jonoPazymiai.length; i++) {
    console.log('Jonas', jonoPazymiai[i]);
}
console.log(jonoPazymiai[0]);
console.log(jonoPazymiai[1]);
console.log(jonoPazymiai[2]);
console.log(jonoPazymiai[3]);
console.log('--------------------');
//maryte
const marytesPazymiai = students[1]
console.log(marytesPazymiai);
for (i = 0; i < marytesPazymiai.length; i++) {
    console.log('Maryte', marytesPazymiai[i]);
}
console.log(marytesPazymiai[0]);
console.log(marytesPazymiai[1]);
console.log(marytesPazymiai[2]);
console.log(marytesPazymiai[3]);
console.log(marytesPazymiai[4]);
console.log('-----------------------');

console.log(students[0]);
for (i = 0; i < students.length; i++) {
    console.log('Jono', students[0][i]);
}
console.clear();

const gorila = [
    [1, 2, 3],
    [4, [5, 6], 7],
    [
        [8, 9, 10],
        [11, 12, 13, [14, 15]],
    ]

]
console.log(gorila[0][0]);
console.log(gorila[0][1]);
console.log(gorila[0][2]);
console.log('------------------');
console.log(gorila[1][0]);
console.log(gorila[1][1][0]);
console.log(gorila[1][1]);
console.log(gorila[1][2]);
console.log(gorila[1][3]);