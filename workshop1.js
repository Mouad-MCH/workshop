const prompt = require ("prompt-sync")();

let etage = Number(prompt(`entre l etage tu veut: `));
let mov = 0;

//---------challenge 1
if(etage % 2 == 0){
    for(let i = 2;i<=etage; i+=2){
        console.log(`->${i}`);
        mov++;
    }
    console.log(`les movment: ${mov}`);
}else{
    for(let i = 2; i <= etage+1; i+=2){
        console.log(`->${i}`);
        mov++;
        if(i == etage + 1){
            i--;
            mov++;
            console.log(`->${i}`);
            break;
        }
    }
    console.log(`les movment: ${mov}`);
}

//---------challenge 2
let r = etage % 3;
switch(r){
    case 0:
        for(let i = 3; i <= etage; i+=3){
            console.log(`up->${i}`);
            mov++;
        }
        console.log(`les movment: ${mov}`);
        break;

    case 1:
        for(let i = 3; i<= etage + 2;i+=3){
            console.log(`up->${i}`);
            mov++;
            if( i == etage + 2) {
                i-=2;
                console.log(` down->${i}`);
                mov++;
            }
        }
        console.log(`les movment: ${mov}`);
        break;
    case 2:
        for(let i = 3; i<= etage + 4;i+=3){
            console.log(`up->${i}`);
            mov++;
            if( i == etage + 4) {
                for(let j = etage + 2; j >= etage; j-=2){
                    console.log(` down->${j}`);
                    mov++;
                } 
            }
        }
        console.log(`les movment: ${mov}`);
        break;
    default:
        break;
}