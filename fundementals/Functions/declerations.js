// functions are a set of satmetns that perform a task or calculates a value 



// declarations.
Hi()
console.log(hi);
function hi(){
    console.log('hi!');
}


// ecpresstion
var hi=function hi(){
    console.log('i already said hi');
}

//declarations = hoisted
//exoressions != hoisted 


//function calling
hi();
hi();
hi();

function hey(){
console.log('Dave,tell cooper i said hey');
}
hey()


//challage: create a function when invoked, list out the numbers 1-10

function printNmuber(){
for(leti-1<11;i++)
    console.log(i)

}

// cahllage: givin an array, creat a function that list out he infividual values
let arr=["this","is","really","cool"]
function arrayList(){
    for (list in arr){
        console.log(arr[list]);
    }
}
arrayList();

