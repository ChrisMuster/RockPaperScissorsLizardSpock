var userChoice = prompt ("Do you choose rock, paper, scissors, lizard, or Spock?");
var computerChoice = Math.random(0,1);
if (computerChoice <= 0.20){
    computerChoice = ("rock");
}
else if (computerChoice <=0.40){
    computerChoice = ("paper");
}
else if (computerChoice <=0.60){
    computerChoice = ("scissors");
}
else if (computerChoice <=0.80){
    computerChoice = ("lizard");
}
else {
    computerChoice = ("Spock");
}
   confirm ( "You chose " + userChoice + ", the computer chose: " + computerChoice + ".");
   console.log ( "You chose "+ userChoice );
   console.log ( "The Computer chose "+ computerChoice );
var compare = function(choice1, choice2) {
    if ( choice1===choice2 ) {
        return "The result is a tie!";
    }
    else if ( choice1==="rock" ) {
        if ( choice2==="scissors" ) {
            return "Rock wins, Rock smashes Scissors.";
        }
        else if ( choice1==="rock" ) {
            if ( choice2==="lizard" ) {
            return "Rock wins, Rock crushes Lizard.";
        }
            else if ( choice1==="rock" ) {
            if ( choice2==="paper" ) {
            return "Paper wins, Paper covers Rock.";
        }
        else {
            return "Spock wins, Spock vaporizes Rock.";
        }
    }
}
}
    else if ( choice1==="paper" ) {
        if ( choice2==="rock" ) {
            return "Paper wins, Paper covers Rock.";
        }
    else if ( choice1==="paper" ) {
        if ( choice2==="Spock" ) {
            return "Paper wins, Paper disproves Spock.";
        }
    else if ( choice1==="paper" ) {
        if ( choice2==="scissors" ) {
            return "Scissors wins, Scissors cuts Paper.";
        }
        else {
            return "Lizard wins, Lizard eats Paper.";
        }
    }
}
}
    else if ( choice1==="scissors" ) {
        if (choice2==="paper") {
            return "Scissors wins, Scissors cuts Paper.";
        }
    else if ( choice1==="scissors" ) {
        if (choice2==="lizard") {
            return "Scissors wins, Scissors decapitates Lizard.";
        } 
    else if ( choice1==="scissors" ) {
        if (choice2==="rock") {
            return "Rock wins, Rock smashes Scissors.";
        }
        else {
            return "Spock wins, Spock smashes Scissors.";
        }
    }
}
}
    else if ( choice1==="lizard" ) {
        if (choice2==="paper") {
            return "Lizard wins, Lizard eats Paper.";
        }
    else if ( choice1==="lizard" ) {
        if (choice2==="Spock") {
            return "Lizard wins, Lizard poisons Spock.";
        }
    else if ( choice1==="lizard" ) {
        if (choice2==="scissors") {
            return "Scissors wins, Scissors decapitates Lizard.";
        }
        else {
            return "Rock wins, Rock crushes Scissors.";
        }
    }
}
}
    else if ( choice1==="Spock" ) {
        if (choice2==="scissors") {
            return "Spock wins, Spock smashes Scissors.";
        }
    else if ( choice1==="Spock" ) {
        if (choice2==="rock") {
            return "Spock wins, Spock vaporizes Rock.";
        }
    else if ( choice1==="Spock" ) {
        if (choice2==="paper") {
            return "Paper wins, Paper disproves Spock.";
        }
        else {
            return "Lizard wins, Lizard poisons Spock.";
        }
    }
}
}
};
var result = compare(userChoice, computerChoice);
confirm (result);
