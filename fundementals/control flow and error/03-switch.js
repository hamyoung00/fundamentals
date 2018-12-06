//switch
// switch stament helo us choose between several options for a variable and a default
// foour main parts toa swithc statement 
//switch, the argument being evaluated
//case,one of the options for the variable to be 
//break , this breaks us out of the switch statement once we hit our case
//default, the default if we dont hit one of our cases not nessary 





//using case for IF ELSE staments.



var friend='alecx';
switch(friend){
case"autumn":
    console.log("hey autumn,when are you going rock climbing");
    break;
case "dave":
console.log('hey dave,hows is cooper?');
break;
case'alecx':
console.log("hey alecx, when are we playing DnD?");
break;
default:
console.log(`Im sorry,${friend},but do I know you?`);

}




var guy='nate';
switch(guy){
    case'harrison':
            console.log('whats up brother');
        break;
     case 'nate':
            console.log('shut up nate');
        break;
    case'Hamilton':
            console.log('smokes lets go');
        break;
    default:
    console.log(`sorry ${guy} your not my buddy guy`)
}


//switch wtih multplie conditons 

var yep=-8

switch(true){
case(yep<0&&yep>-10):
        console.log('worked');
    break;
case(yep>0):
        console.log("worked!!");
    break;
default:
console.log('didnt work');
}


/***************************************************************************** */
                    //ternary
/****************************************************************************** */
//what is ternary? a great way to write a single line for a if/ if else statement.

let x=6;
(x>0) ? console.log('yes') : console.log('no')


let x=7;
(x==0) ? console.log('hello') : (x<0) ? console.log("hi") : console.log('goodbye')




let age=30;
(age>25) ? console.log('yay you can rent a car') : (age>21) ? console.log('yay you can drink') : (age>18) ? console.log('yay you can vote') : console.log('sorry your to young to do anything')