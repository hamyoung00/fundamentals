function coffee(){
    console.log('i alwasy need coffee');

}
coffee();

//Fat arrow function 

let coffee=() => {
    console.log('coffee is great');
}
coffee();

//Oneline fat arrow function/ Concise fat arrow function
var coffe= () => console.log('coffee if great')

coffee();

let coffee=(blackcoffee) => console.log(`${blackcoffee} and cant be beat`)
coffee('is the Best');


//for Concise fat arrow fucntions, returns are implied 


/*************************************************************** */
// returns
/**************************************************************** */

function captializeName(name){
    let capName='';
    for (let h in name){
        if (h == 0){
            capName+=name[h].toUpperCase();
        }else{
            capName += name[h].toLowerCase();
        }
     }
    console.log(capName)
    return capName
}
captializeName('auTumn')

const newName = captializeName('auTumn');
console.log(newName + " how are you?")

//challenge:
//make a tip calculator usung a functions
//have it retunr the value 
//capture that returned value in a varuabke 
//print that variable 


function tipCalc(bill){
   let tip=(bill* 0.2)
    return tip.toFixed(2)
}
let totalTip=tipCalc(20.00)
    console.log(totalTip)




    