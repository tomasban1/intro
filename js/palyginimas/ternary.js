/*
UNARY - vienybė (a++, a--)
BINARY - dvejybė (a+b)
TERNARY - trejybė (a?b:c)
*/

const b = 4 > 2 ? 555 : 888;
console.log(b);

const c = 1 + (3 < 4 ? 0 : 10);
console.log(c);

const dIndex = 2 + (5 < 8 ? 0 : 5);// Raides isemimas is zodzio
const d = 'Pomidoras'[dIndex];
console.log(d);

const e = 'labas'.length > 0 ? 'Ilgas' : 'Trumpas'
console.log(e);


/*
Jeigu skaicius yra teigiamas, tai ji sumuojame su savimi;
Jeigu skaicius yra neigiamas, tai is jo atimame 10.
*/

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

const n = -7;
const ans = n > 0 ? sum(n, n) : diff(n, 10);
console.log(ans);


/*
Jeigu, tekstas yra trumpas (t.y. iki 5 simboliu),
tai grazink pirma simboli, priesingu atveju, grazink paskutini.
*/

const short = txt => txt[0];
const long = txt => txt.at(-1);

const text1 = 'Labas';

const ans2 = text1.length < 5 ? short(text1) : long(text1);
console.log(ans2);

//antras variantas

const funcToCall = text1.length < 5 ? short : long;
const answer = funcToCall(text1)
console.log(answer);

//pavyzdys su array

const jonoPaz = [];
const marytesPaz = [5, 7, 10, 2, 6, 10];

function noMarks() {
    return 'Neturi pazymiu, todel negalima apskaiciuoti vidurkio'
}

function marksVidurkis(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i]
    }
    const count = marks.length
    const average = sum / count
    return average
}

const jonasCount = jonoPaz.length === 0 ? noMarks : marksVidurkis;
const jonAverage = jonasCount(jonoPaz);
console.log(jonAverage);

const maryteCount = marytesPaz.length === 0 ? noMarks : marksVidurkis;
const marAverage = maryteCount(marytesPaz);
console.log(marAverage);