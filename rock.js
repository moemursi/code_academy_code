const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || 'paper' || 'scissors') {
        return userInput;
    } else {
        console.log("you didn't enter a valid input")
    }
}

getUserChoice('rock');
console.log(getUserChoice('rock'));

const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3);
    console.log(random);
    return random;
}

getComputerChoice();
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "tie game";
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Computer won1";
        } else {
            return "User Won!!";
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors' || 'rock') {
            return "computer wins!";
        } else {
            return "user wins";
        }


    } else if (userChoice === "scissors") {
        if (computerChoice === 'rock' || 'paper') {
            return "Computer Wins";
        } else {
            return "user Wins";
        }
    } else {
        return "bad Input";
    }
}
console.log(determineWinner('rock', 'scissors'));

const playGame = (userChoice, computerChoice) => {
    userChoice = getUserChoice('rock' || 'paper' || 'scissors');
    computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice)
}




