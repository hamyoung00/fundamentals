const x=12
function scope(){
    const x=33
    if(true){
        let x=45;
        console.log(x);
    }
console.log(x);
}

scope()
console.log(x);

//variable grammer   obeys functional scope    obeys black scope       can be mutated(changed after initializations)
//var                 x                           -                       x   
//let                 x                           x                       x   
//const               x                           x                       -