

const heroes = ['Batman' , 'Superman', 'Wonder woman', 'Aquaman'];

console.warn('For tradicional');

for( let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

//FOR IN

console.warn('For in');
for( let i in heroes ){
    console.log(heroes[i]);
}


//FOR OF
console.warn('For of');
for ( let heroe of heroes){
    console.log(heroe);
}
