// parameters are like empty stoage boxes we can name them whatever we want
//name inside of the function 

//we cab also have mulptile  differnt paramerters for a single function. we provide the paramerter
//when we call our function 

function pet(animal){
    console.log(`i have a ${animal} for a pet`)

}
pet("dog");
pet("bird")
pet("occelot")


function food(food){
    console.log(`i love ${food}`)

}
food("bugers")
food("pizza")


function pet2(animal,owner){
    console.log(`${owner} has a ${animal} for a pet`)
}
pet2("dog", "autumn")
pet2("bird", "dave")
pet2("occelot", "hamilton")



//cahllenge: write a funciton that has tow name
// one parameter is for a first name 
//the other parmeter if for a last name
//have them come together in a variable inside the function
//console.log"hello, my name is __________'


function name2(first,last){
    let fullName= first+' '+last;
    console.log(`Hello my name is ${fullName}`)
}
name2('Hamilton','Young')



