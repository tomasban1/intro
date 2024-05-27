const day = 7;//jei paduodamas parametras, kurio case neranda, naudoja default

switch (day) {
    case 1:
        console.log('pirm');
        break;  //reikalingi, kad suveikus kodui sustapdytu tolimesni logikos veikima.

    case 2:
        console.log('antr');
        break;

    case 3:
        console.log('trec');
        break;

    case 4:
        console.log('ketv');
        break;

    case 5:
        console.log('penkt');
        break;

    case 6:
        console.log('sest');
        break;

    case 7:
        console.log('sekm');
        break;
    default:
        console.log('ERROR: switch');

}

//autobusas -> marsrutas ->a->b; b->a;
const stop = 'N.Vilnia';

switch (stop) {
    case 'N.Vilnia':
        console.log('N.Vilnia');
        break;
    case 'Mindaugo':
        console.log('Mindaugo');
        break;
    case 'Rudens':
        console.log('Rudens');
        break;
}
