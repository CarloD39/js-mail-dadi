// // ------PRIMO-ESERCIZIO-EMAIL-------

var ContactEmail = ['carlodurand@hotmail.it', 'micheledurand@hotmail.it', 'maurodurand@hotmail.it', 'giacomodurand@hotmail.it'];
var email = prompt('inserisci email');
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

// // ---DADI-- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//              Stabilire il vincitore, in base a chi fa il punteggio più alto.

// var outputFirst = document.getElementById('primo-numero');
// var outputSecond = document.getElementById('secondo-numero');

//two random numbers located in two different divs
// var FirstDice = Math.floor(Math.random() * 6)+1;
// outputFirst.innerHTML = FirstDice;

// var SecondDice = Math.floor(Math.random() * 6)+1;
// outputSecond.innerHTML = SecondDice;

// var resultGame = document.getElementById('result-game');

// if(FirstDice === SecondDice){
//     resultGame.innerHTML = 'Its a draw';

// } else if(FirstDice > SecondDice){
//     resultGame.innerHTML = 'The First win';

// } else{
//     resultGame.innerHTML = 'The Second win';
// }

// ------------------------------------------------
   

// // ---DADI-- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//              Stabilire il vincitore, in base a chi fa il punteggio più alto.


var Result = document.getElementById('it');
var FirstItem =  Math.floor(Math.random() * 6)+1;
var SecondItem =  Math.floor(Math.random() * 6)+1;

Result.innerHTML += FirstItem + '-------' + SecondItem;

var FinalResult = document.getElementById('winner');

if(FirstItem > SecondItem){
    FinalResult.innerHTML = 'FirstItem is the winner';

}else if(FirstItem < SecondItem){
    FinalResult.innerHTML = 'SecondItem is the winner';

}else{
    FinalResult.innerHTML = 'its a draw';
}
