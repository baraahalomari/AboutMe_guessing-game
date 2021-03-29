'use strict'
let userName=prompt("what is your name?");
alert ("Hello " +userName );
let universityDegree=prompt("Did you know what is my university degree?");
universityDegree=universityDegree.toLowerCase();
if (universityDegree=== "yes" || universityDegree==="y") {
    console.log("you gussed it is a civil engineering")
    alert ("you gussed it is a civil engineering" );
} else if (universityDegree==="no" || universityDegree==="n"){
console.log(" it is a civil engineering")
alert ("it is a civil engineering " +userName );
}else {
    alert ("answer yes or no, please " +userName );
}

let whereFrome=prompt("Did you know where I frome?");
whereFrome=whereFrome.toLocaleLowerCase();
if (whereFrome==="yes" || whereFrome==="y") {
    console.log("you gussed I'm from irbid")
    alert ("you gussed that true, I'm from irbid " + userName);
} else if (whereFrome==="no" || whereFrome==="n"){
console.log(" I'm from irbid")
alert ("I'm from irbid " +userName );
}

let myAge=prompt("Did you Know my age?");
myAge=myAge.toLocaleLowerCase();
if (myAge==="yes" || myAge==="y") {
    console.log("you gussed I'm 25 years old")
    alert ("you gussed I'm 25 years old" + userName);
} else if(myAge==="no" || myAge==="n"){
    console.log("I'm 25 years old "+ userName)
    alert ("I'm 25 years old" + userName);
}

let favoriteHobby=prompt("Did you know what is my favorite hobby?");
favoriteHobby=favoriteHobby.toLowerCase();
if (favoriteHobby==="yes" || favoriteHobby==="y") {
    console.log("you gussed it is  playing sport")
    alert ("that true it is  playing sport " + userName);
} else if (favoriteHobby==="no" || favoriteHobby==="n"){
    console.log("it is playing sport " + userName)
    alert ("it is playing sport" + userName);
}
let favoriteColor=prompt("Did you Know my favorite color?");
favoriteColor=favoriteColor.toLowerCase();
if (favoriteColor==="yes" || favoriteColor==="y") {
    console.log("you gussed it is  purple")
    alert ("it is  purple that true " + userName);
} else if (favoriteColor==="no" || favoriteColor==="n"){
    console.log("it is purple " + userName)
    alert ("it is purple " + userName);
}
alert ("nice to meet you " + userName);

