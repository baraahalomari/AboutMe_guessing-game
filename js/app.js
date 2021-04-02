'use strict'
let userName = prompt("what is your name?");
alert("Hello " + userName);
let score = 0;
function firstQuestion() {
    let universityDegree = prompt("Did you know what is my university degree?");
    universityDegree = universityDegree.toLowerCase();
    if (universityDegree === "yes" || universityDegree === "y") {
        console.log("you gussed it is a civil engineering")
        alert("you gussed it is a civil engineering");
        score++;
    } else if (universityDegree === "no" || universityDegree === "n") {
        console.log(" it is a civil engineering")
        alert("it is a civil engineering " + userName);
    } else {
        alert("answer yes or no, please " + userName);
    }
    return universityDegree;
}
firstQuestion();

function secondQuestion() {
    let whereFrome = prompt("Did you know where I frome?");
    whereFrome = whereFrome.toLocaleLowerCase();
    if (whereFrome === "yes" || whereFrome === "y") {
        console.log("you gussed I'm from irbid")
        alert("you gussed that true, I'm from irbid " + userName);
        score++;
    } else if (whereFrome === "no" || whereFrome === "n") {
        console.log(" I'm from irbid")
        alert("I'm from irbid " + userName);
    } else {
        alert("answer yes or no, please " + userName);
    }
    return whereFrome;
}
secondQuestion();

function thirdQuestion() {
    let myAge = prompt("Did you Know my age?");
    myAge = myAge.toLocaleLowerCase();
    if (myAge === "yes" || myAge === "y") {
        console.log("you gussed I'm 25 years old")
        alert("you gussed I'm 25 years old" + userName);
        score++;
    } else if (myAge === "no" || myAge === "n") {
        console.log("I'm 25 years old " + userName)
        alert("I'm 25 years old" + userName);
    } else {
        alert("answer yes or no, please " + userName);
    }
    return myAge;
}
thirdQuestion();

function fourthQuestion() {
    let favoriteHobby = prompt("Did you know what is my favorite hobby?");
    favoriteHobby = favoriteHobby.toLowerCase();
    if (favoriteHobby === "yes" || favoriteHobby === "y") {
        console.log("you gussed it is  playing sport")
        alert("that true it is  playing sport " + userName);
        score++;
    } else if (favoriteHobby === "no" || favoriteHobby === "n") {
        console.log("it is playing sport " + userName)
        alert("it is playing sport" + userName);
    } else {
        alert("answer yes or no, please " + userName);
    }
    return favoriteHobby;
}
fourthQuestion();

function fifthQuestion() {
    let favoriteColor = prompt("Did you Know my favorite color?");
    favoriteColor = favoriteColor.toLowerCase();
    if (favoriteColor === "yes" || favoriteColor === "y") {
        console.log("you gussed it is  purple")
        alert("it is  purple that true " + userName);
        score++;
    } else if (favoriteColor === "no" || favoriteColor === "n") {
        console.log("it is purple " + userName)
        alert("it is purple " + userName);
    } else {
        alert("answer yes or no, please " + userName);
    }
    return favoriteColor;
}
fifthQuestion();

function sixthQuestion() {

    let number = 9;
    let gussNumber = null;
    for (let i = 0; i <= 10; i++) {
        gussNumber = prompt("let's play; you should guss a number between 1 - 10");
        if (gussNumber == number) {
            alert("great job");
            score++;
            break;

        } else if (gussNumber > number) {
            alert("too high" + userName);
        } else if (gussNumber < number) {
            alert("too low ");
        }
    }
    alert("the anwer is  " + number);
    return gussNumber;
}
sixthQuestion();

let candes = null;
function seventhQuestion() {

    candes = ['coockis', 'caramels', 'chocolates', 'gummy'];
    let gussCandy = null;
    hasCandy: for (let j = 0; j < 6; j++) {
        gussCandy = prompt("guss what type of candy i prefer?");

        for (let i = 0; i < candes.length; i++) {
            console.log(candes[i]);


            if (gussCandy === candes[i]) {
                alert("That true" + candes);
                score++;
                j=6;

                break hasCandy;
            }
        }
    if (j==5) {
        alert  ('that wrong, I prefere ' + candes);

        }else if (j<6) {
            alert('this is wrong');
        }

    }
    return gussCandy;



}
seventhQuestion();

alert("I like " + candes);
alert("Nice to meet you " + userName + " you'r score is " + score);
console.log(score);


