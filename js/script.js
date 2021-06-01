// // ------PRIMO-ESERCIZIO-EMAIL-------

var ContactEmail = ['carlodurand@hotmail.it', 'micheledurand@hotmail.it', 'maurodurand@hotmail.it', 'giacomodurand@hotmail.it'];
var email = prompt('inserisci email')
var check = false;

var output = document.getElementById('emails');

for (var i = 0; i < ContactEmail.length; i++){
    if (ContactEmail[i] === email){
        check = true;
        break;
    }   
}   
 
if (check){
    output.innerHTML += 'lemail inserita è in lista'; 
} else{
    output.innerHTML += 'lemail inserita NON è in lista'
}

// // ---------------DADI---------------

var outputFirst = document.getElementById('primo-numero');
var outputSecond = document.getElementById('secondo-numero');

//two random numbers located in two different divs
var FirstDice = Math.floor(Math.random() * 7);
outputFirst.innerHTML = FirstDice;

var SecondDice = Math.floor(Math.random() * 7);
outputSecond.innerHTML = SecondDice;

var resultGame = document.getElementById('result-game');

if(FirstDice === SecondDice){
    resultGame.innerHTML = 'Its a draw';

} else if(FirstDice > SecondDice){
    resultGame.innerHTML = 'The First win';

} else{
    resultGame.innerHTML = 'The Second win';
}


   


