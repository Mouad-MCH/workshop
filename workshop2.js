const prompt = require ("prompt-sync")();

function count(a){
    
    let foi=0;
    for(let j = 0;j<tab.length;j++){
        if(a == tab[j])     foi++;
    }
    return foi
    
}

let tab = [4,1,1,2,5,5,4,5,5];
let c;
let i;

c = count(tab[0]);

for(i = 0; i<tab.length; i++){
    if(count(tab[i]) % 2 != 0){
        c = count(tab[i])
        break;
    }
}

console.log(`la valeur: repete ${c} fois!`);
