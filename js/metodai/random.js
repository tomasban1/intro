//[0....1)
console.log(Math.random);

function moneta() {
    if (Math.random() < 0.5) {
        return 'Skaicius'
    } else {
        return 'Herbas'
    }
}
console.log(moneta());

const metimuKiekis = 50;
let herbas = 0;
for (i = 0; i < metimuKiekis; i++) {
    const iskrito = moneta();
    if (iskrito === 'Herbas') {
        herbas++
    }
}
//console.log(herbas);
//console.log(metimuKiekis - herbas);

const week = ['Pirm', 'Antr', 'Trec', 'Ketv', 'Penkt', 'Sest', 'Sekm'];

/*for (let i = 0; i < 10; i++) {                                          //<===random skaicius nuo 1 iki 7, pagal sav dienas
    const index = Math.floor(Math.random() * week.length); //<==Isiminti formule
    console.log(week[index]);
}
*/
//console.log(Math.floor((Math.random() * 10) + 1));// random skaicius nuo 1 iki 10    //random skaicius nuo 1 iki 10

//ND-Man reikia atsitiktinio skaiciaus intervale nuo 23 iki 617 imtinai.
for (i = 0; i < 10; i++) {
    const random = Math.floor(Math.max(23, Math.random() * 617));
    console.log(random);

}
