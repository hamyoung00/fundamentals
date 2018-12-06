let student={name:"jamie",awesome:true, course:"javascript"};

for(item in student){
    console.log(item);
    console.log(student[item]);
}


let catArray=['tabby','burmese','ragdoll','trotie'];
for(cat in catArray){
    console.log(cat)
}

//write a for loop that capitalizes the first letter of a students name

var name="ham"
var capName;
for(var letter in name){
    if (letter ==0){
        capName = name[letter].toUpperCase();
    }else{
        capName+= name[letter].toLowerCase();
    }
}
console.log(capName)