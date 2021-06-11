var userChoice = prompt ("Do you choose rock, paper, scissors, lizard, or Spock?");

var randomChoice = Math.random(0,1);
var computerChoice;

if (randomChoice <= 0.20){
    computerChoice = "rock";
} else if (randomChoice <= 0.40){
    computerChoice = "paper";
} else if (randomChoice <= 0.60){
    computerChoice = "scissors";
} else if (randomChoice <= 0.80){
    computerChoice = "lizard";
} else {
    computerChoice = "Spock";
}

confirm ("You chose " + userChoice + ", the computer chose: " + computerChoice + ".");

   console.log ("You chose "+ userChoice);

   console.log ("The Computer chose "+ computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }

    switch (choice1) {
        case "rock":
            if (choice2 === "scissors") {
                return "Rock wins, Rock smashes Scissors.";
            }
            
            if (choice2 === "lizard") {
                return "Rock wins, Rock crushes Lizard.";
            }
            
            if (choice2 === "paper") {
                return "Paper wins, Paper covers Rock.";
            } else {
                return "Spock wins, Spock vaporizes Rock.";
            }
            break;
        case "paper":
            if (choice2 === "rock") {
                return "Paper wins, Paper covers Rock.";
            }
        
            if (choice2 === "Spock") {
                return "Paper wins, Paper disproves Spock.";
            }

            if (choice2 === "scissors") {
                return "Scissors wins, Scissors cuts Paper.";
            } else {
                return "Lizard wins, Lizard eats Paper.";
            }
            break;
        case "scissors":
            if (choice2 === "paper") {
                return "Scissors wins, Scissors cuts Paper.";
            }
        
            if (choice2 === "lizard") {
                return "Scissors wins, Scissors decapitates Lizard.";
            } 
        
            if (choice2 === "rock") {
                return "Rock wins, Rock smashes Scissors.";
            } else {
                return "Spock wins, Spock smashes Scissors.";
            }
            break;
        case "lizard":
            if (choice2 === "paper") {
                return "Lizard wins, Lizard eats Paper.";
            }
        
            if (choice2 === "Spock") {
                return "Lizard wins, Lizard poisons Spock.";
            }
        
            if (choice2 === "scissors") {
                return "Scissors wins, Scissors decapitates Lizard.";
            } else {
                return "Rock wins, Rock crushes Scissors.";
            }
            break;
        case "Spock":
            if (choice2 === "scissors") {
                return "Spock wins, Spock smashes Scissors.";
            }
        
            if (choice2 === "rock") {
                return "Spock wins, Spock vaporizes Rock.";
            }
        
            if (choice2 === "paper") {
                return "Paper wins, Paper disproves Spock.";
            } else {
                return "Lizard wins, Lizard poisons Spock.";
            }
    }
};

var result = compare(userChoice, computerChoice);

confirm (result);
