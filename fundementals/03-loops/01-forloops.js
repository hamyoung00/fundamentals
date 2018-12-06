for (var i =0; i<10; i++){
    console.log(i)
};

// challenge: using a for loop count to 20 by 2's

for (var i=2; i<21; i+=2){
    console.log(i)
}


// usong for loop count down from 10 to 0



for (var x=11-1;x >= 1;x--) 
console.log(x);




//challenge: useing a for loop, count form 0, going down by 2'sto -24


for(var x=1-1;x >=-24;x-=2)
console.log(x);


//challenge:useing a for liip, go through a name and display each letter individually 

let name ="hamilton"
let arrayName=name.split('')
for(i=0; i < arrayName.length; i++){
    console.log(anotherName[i]);
}

//challenge make a for loop whre you add up all the number form 1 to 50 
//(should equal 1275)


let sum=0;

for(i=1; i<=50;i++)
    sum+=1

    if(i==50)
        console.log(sum);