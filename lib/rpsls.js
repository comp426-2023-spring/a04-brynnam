const options = [
    "rock",
    "paper",
    "scissors"
];

const expansionOptions = [
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock"
];

export function rps(playerChoice) {
    if (!options.includes(playerChoice)) {
        console.error('${playerChoice} is not a valid choice! Please try again!')
        rules();
        help();
        return;
    }
    const opponentChoice = options[Math.random() * (2 - 0 + 1) + 0];
    
    //add switch case to do lose, win, or tie
    switch(true) {

        //tie case
        case (playerChoice == opponentChoice):
            return {
                "player": playerChoice,
                "opponent": opponentChoice,
                "result": "tie"
            };

        //win cases
        case (playerChoice == "scissors" && opponentChoice == "paper"):
        case (playerChoice == "paper" && opponentChoice == "rock"):
        case (playerChoice == "rock" && opponentChoice == "scissors"):
            return {
                "player": playerChoice,
                "opponent": opponentChoice,
                "result": "win"
            };

        //lose cases
        case (playerChoice == "paper" && opponentChoice == "scissors"):
        case (playerChoice == "rock" && opponentChoice == "paper"):
        case (playerChoice == "scissors" && opponentChoice == "rock"):
            return {
                "player": playerChoice,
                "opponent": opponentChoice,
                "result": "lose"
            };
    }
}

export function rpsls(playerChoice) {
    if (!expansionOptions.includes(playerChoice)) {
        console.error('${playerChoice} is not a valid choice! Please try again!')
        expansionRules();
        expansionHelp();
        return;
    }
    const opponentChoice = expansionOptions[Math.random() * (2 - 0 + 1) + 0];

    switch(true) {

        //tie case
        case (playerChoice == opponentChoice):
            return {
                "player": playerChoice,
                "opponent": opponentChoice,
                "result": "tie"
            };

        //win cases
        case (playerChoice == "scissors" && opponentChoice == "paper"):
        case (playerChoice == "paper" && opponentChoice == "rock"):
        case (playerChoice == "rock" && opponentChoice == "lizard"):
        case (playerChoice == "lizard" && opponentChoice == "spock"):
        case (playerChoice == "spock" && opponentChoice == "scissors"):
        case (playerChoice == "scissors" && opponentChoice == "lizard"):
        case (playerChoice == "lizard" && opponentChoice == "paper"):
        case (playerChoice == "paper" && opponentChoice == "spock"):
        case (playerChoice == "spock" && opponentChoice == "rock"):
        case (playerChoice == "rock" && opponentChoice == "scissors"):
            return {
                "player": playerChoice,
                "opponent": opponentChoice,
                "result": "win"
            };

        //lose cases
        case (playerChoice == "paper" && opponentChoice == "scissors"):
        case (playerChoice == "rock" && opponentChoice == "paper"):
        case (playerChoice == "lizard" && opponentChoice == "rock"):
        case (playerChoice == "spock" && opponentChoice == "lizard"):
        case (playerChoice == "scissors" && opponentChoice == "spock"):
        case (playerChoice == "lizard" && opponentChoice == "scissors"):
        case (playerChoice == "paper" && opponentChoice == "lizard"):
        case (playerChoice == "spock" && opponentChoice == "paper"):
        case (playerChoice == "rock" && opponentChoice == "spock"):
        case (playerChoice == "scissors" && opponentChoice == "rock"):
            return {
                "player": playerChoice,
                "opponent": opponentChoice,
                "result": "lose"
            };
    }
}

//rules

export function rules() {
    console.log(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);
    return;
}

export function expansionRules() {
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
    return;
}

//help

export function help() {
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`);
    return;
}

export function expansionHelp() {
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
    return;
}
