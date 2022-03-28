function name(){
    var n = prompt("What is your name?")
    return n
}

function ran(){
    var r = Math.floor(Math.random() * 10) + 1;
    return r
}

function hum(){
    var humScore = []
    do{
        var rn = ran()
        for(var i = 1; i <= rn; i++){
            humScore.push("w")
        }
        alert(`Your number is ${rn}, your total is ${humScore.length}.`)
        if(humScore.length > 19){
            break;
        }else{
            var a = prompt("Would you like to draw another card? Enter 'n' if no.")
        }
    }while(a != "n")
    alert(`Your total is ${humScore.length}.`)
    return humScore.length
}

function comp(){
    var compScore = []
    do{
        var rn = ran()
        for(var i = 1; i <= rn; i++){
            compScore.push("w")
        }
        alert(`The computers number is ${rn}, the computers total is ${compScore.length}.`)
    }while(compScore.length < 16)
    alert(`The computers score is ${compScore.length}.`)
    return compScore.length
}


function program(a) {

    var h = hum()
    var c = comp()
    
    if((h > 21) && (c > 21)){
        alert(`${a}, your final number is ${h}, and the computer's final number is ${c}. Since you both went over 20, no one wins.`)
    }else if(h > 21){
        alert(`${a}, your final number is ${h}. Since you went over 20, the computer wins with ${c}.`)
    }else if(c > 21){
        alert(`The computer's final number is ${c}. Since the computer went over 20, you win with ${h}!`)
    }else if(h == c){
        alert(`${a}, your final number is ${h}, and the computer's final number is ${c}. It's a tie!`)
    }else if(h > c){
        alert(`${a}, your final number is ${h}, and the computer's final number is ${c}. You won!`)
    }else if(h < c){
        alert(`${a}, your final number is ${h}, and the computer's final number is ${c}. You Lost.`)
    }
}

function playAgain(){
    var play = prompt(`Would you like to continue? Press 'y' if yes.`)
    return play
}


do{
    var p = playAgain(program(name()))
}while(p == "y")