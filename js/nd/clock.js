/*
laikrodzio kombinacijos valandos tikslumu
intervalas nuo 1 iki 12
formatas: 1:00, 2:00
intervalas kas 15 min
*/

/*
for (let val = 1; val <= 4; val++) {
    let min = 0;
    console.log(val + ':' + min);
    min += 15

    console.log(val + ':' + min);
    min += 15

    console.log(val + ':' + min);
    min += 15

    console.log(val + ':' + min);
    min += 15
}
*/

for (let val = 0; val < 24; val++) {
    console.log('--------------');

    for (let min = 0; min < 60; min++) {

        for (let sec = 0; sec <= 60; sec++) {
            console.log(val + ':' + min + ':' + sec);
        }
    }
}
