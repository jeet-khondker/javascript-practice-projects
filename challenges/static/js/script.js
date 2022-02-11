// Challenge 1 : Age In Days
function getAgeInDays() {
    var birthYear = prompt("What year were you born?")
    var currentYear = new Date().getFullYear()
    var ageInDays = (currentYear - birthYear) * 365

    var h1 = document.createElement("h1")
    var answer = document.createTextNode("You are " + ageInDays + " days old.")

    h1.setAttribute("id", "ageInDays")
    h1.appendChild(answer)

    document.getElementById("flexbox-result").appendChild(h1)
}

function reset() {
    document.getElementById("ageInDays").remove()
}

// Challenge 2 : Cat Generator
function generateCat() {
    var image = document.createElement("img")
    var div = document.getElementById("flex-cat-gen")
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image)
}

// Challenge 3 : Rock - Paper - Scissors

var choices = ["rock", "paper", "scissors"]

// Function : Main Gameplay
function rpsGame(yourChoice) {
    var humanChoice, computerChoice
    humanChoice = yourChoice.id
    computerChoice = numberToChoice(randomToNumber())
    results = decideWinner(humanChoice, computerChoice)
    message = getMessage(results)
    startGame(yourChoice.id, computerChoice, message)
}

// Function : Returning a random integer number from 0 - 2
function randomToNumber() {
    return Math.floor(Math.random() * 3)
}

// Function : Returning Choice from a number
function numberToChoice(number) {
    return choices[number]
}

// Function : Decide Winner of the game
function decideWinner(yourChoice, computerChoice) {

    // Points Table for each individual choices
    var pointsDatabase = {
        "rock" : {
            "rock" : 0.5,
            "paper" : 0,
            "scissors" : 1,
        },
        "paper" : {
            "rock" : 1,
            "paper" : 0.5,
            "scissors" : 0,
        },
        "scissors" : {
            "rock" : 0,
            "paper" : 1,
            "scissors" : 0.5,
        },
    }

    var yourScore = pointsDatabase[yourChoice][computerChoice]
    var computerScore = pointsDatabase[computerChoice][yourChoice]

    return [yourScore, computerScore]
}

// Function : Get Message
function getMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {
            "message" : "You Lost! 😞",
            "color" : "red",
        }
    } else if (yourScore === 0.5) {
        return {
            "message" : "Match Tied!",
            "color" : "black",
        }
    } else {
        return {
            "message" : "You Won! 😀",
            "color" : "green",
        }
    }
}

// Function : Starting the Game on Frontend
function startGame(humanImageChoice, computerImageChoice, finalMessage) {

    // Database for Images
    var imagesDatabase = {
        "rock" : document.getElementById("rock").src,
        "paper" : document.getElementById("paper").src,
        "scissors" : document.getElementById("scissors").src,
    }

    // Removing all the images
    document.getElementById("rock").remove()
    document.getElementById("paper").remove()
    document.getElementById("scissors").remove()

    var humanDiv = document.createElement("div")
    var computerDiv = document.createElement("div")
    var messageDiv = document.createElement("div")

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)' />"
    document.getElementById("flexbox-rps-div").appendChild(humanDiv)

    messageDiv.innerHTML = "<h1 style='color: " + finalMessage["color"] + ";'>" + finalMessage["message"] + "</h1>"
    document.getElementById("flexbox-rps-div").appendChild(messageDiv)

    computerDiv.innerHTML = "<img src='" + imagesDatabase[computerImageChoice] + "' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)' />"
    document.getElementById("flexbox-rps-div").appendChild(computerDiv)

}

// Challenge 4 : Change the Color of All Buttons

const RED = "btn-danger"
const GREEN = "btn-success"
const BLUE = "btn-primary"
const YELLOW = "btn-warning"
const BLACK = "btn-dark"

var all_buttons = document.getElementsByTagName("button")

var copyAllButtons = []

//  Duplicating all buttons for future reference (Important While reseting color)
for (let button = 0; button < all_buttons.length; button++) {
    copyAllButtons.push(all_buttons[button].classList[1]) // Getting the 2nd class of each button
}

// Function : Changing Button Color
function buttonColorChange(aButton) {

    if (aButton.value === "red") {
        colorButtonRed()
    } else if (aButton.value === "green") {
        colorButtonGreen()
    } else if (aButton.value === "reset") {
        resetButtonColor()
    } else if (aButton.value === "random") {
        colorButtonRandom()
    }

}

// Function : Color All Buttons to Red
function colorButtonRed() {
    for (let button = 0; button < all_buttons.length; button++) {
        all_buttons[button].classList.remove(all_buttons[button].classList[1])
        all_buttons[button].classList.add(RED)
    }
}

// Function : Color All Buttons to Green
function colorButtonGreen() {
    for (let button = 0; button < all_buttons.length; button++) {
        all_buttons[button].classList.remove(all_buttons[button].classList[1])
        all_buttons[button].classList.add(GREEN)
    }
}

// Function: Resetting All Buttons Colors to Originals
function resetButtonColor() {
    for (let button = 0; button < all_buttons.length; button++) {
        all_buttons[button].classList.remove(all_buttons[button].classList[1])
        all_buttons[button].classList.add(copyAllButtons[button])
    }
}

// Function : Painting Random Colors to All Buttons
function colorButtonRandom() {
    let choices = [RED, BLUE, GREEN, YELLOW, BLACK]

    for (let button = 0; button < all_buttons.length; button++) {
        var randomNumber = Math.floor(Math.random() * 5)
        all_buttons[button].classList.remove(all_buttons[button].classList[1])
        all_buttons[button].classList.add(choices[randomNumber])
    }
}

// Challenge 5 : BlackJack Game of 21

let blackjackGame = {
    "you" : {
        "scoreSpan" : "#your-blackjack-result",
        "div" : "#your-box",
        "score" : 0,
    },
    "dealer" : {
        "scoreSpan" : "#dealer-blackjack-result",
        "div" : "#dealer-box",
        "score" : 0,
    },
    "cards" : [
        '2', '3', '4', '5', '6', '7', '8', '9', "10", 'K', 'J', 'Q', 'A'
    ],
    "cardsPoint" : {
        '2' : 2,
        '3' : 3,
        '4' : 4,
        '5' : 5,
        '6' : 6,
        '7' : 7,
        '8' : 8,
        '9' : 9,
        "10" : 10,
        'K' : 10,
        'J' : 10,
        'Q' : 10,
        'A' : [1, 11],
    },
    "wins" : 0,
    "losses" : 0,
    "draws" : 0,
    "isStand" : false,
    "turnsOver" : false,
}

const YOU = blackjackGame["you"]
const DEALER = blackjackGame["dealer"]

const hitSound = new Audio("static/sounds/swish.m4a")
const winSound = new Audio("static/sounds/cash.mp3")
const lostSound = new Audio("static/sounds/aww.mp3")

document.querySelector("#hitBtn").addEventListener("click", blackjackHit)
document.querySelector("#standBtn").addEventListener("click", blackjackStand)
document.querySelector("#dealBtn").addEventListener("click", blackjackDeal)

// Function : Hit Button
function blackjackHit() {
    if (blackjackGame["isStand"] === false) {
        let card = generateRandomCard()
        showCard(card, YOU)
        updateScore(card, YOU)
        showScore(YOU)
    }
    
}

// Function : Generate Random Card
function generateRandomCard() {
    let randomIndex = Math.floor(Math.random() * 13)
    return blackjackGame["cards"][randomIndex]
}

// Function : Show Card
function showCard(card, activePlayer) {

    if (activePlayer["score"] <= 21) {
        let cardImage = document.createElement("img")
        cardImage.src = `static/images/blackjack/${card}.png`
        document.querySelector(activePlayer["div"]).appendChild(cardImage)
        hitSound.play()
    }
    
}

// Function : Reset Game - Deal Button Functionality
function blackjackDeal() {

    if (blackjackGame["turnsOver"] === true) {

        blackjackGame["isStand"] = false

        let yourImages = document.querySelector("#your-box").querySelectorAll("img")
        let dealerImages = document.querySelector("#dealer-box").querySelectorAll("img")
        
        // Removing all your images
        for (image = 0; image < yourImages.length; image++) {
            yourImages[image].remove()
        }

        // Removing all dealer's images
        for (image = 0; image < dealerImages.length; image++) {
            dealerImages[image].remove()
        }

        YOU["score"] = 0
        DEALER["score"] = 0

        document.querySelector("#your-blackjack-result").textContent = 0
        document.querySelector("#your-blackjack-result").style.color = "#ffffff"
        document.querySelector("#your-blackjack-result").style.fontWeight = "normal"

        document.querySelector("#dealer-blackjack-result").textContent = DEALER["score"]
        document.querySelector("#dealer-blackjack-result").style.color = "#ffffff"
        document.querySelector("#dealer-blackjack-result").style.fontWeight = "normal"

        document.querySelector("#blackjack-result").textContent = "Let's Play"
        document.querySelector("#blackjack-result").style.color = "#000000"

        blackjackGame["turnsOver"] = true
        document.getElementById("standBtn").disabled = false
    }

}

// Function : Update Score of Active Player
function updateScore(card, activePlayer) {
    
    // If Card is "Ace"
    if (card === 'A') {

        // If adding 11 keeps the score below 21, add 11. Otherwise add 1
        if (activePlayer["score"] + blackjackGame["cardsPoint"][card][1] <= 21) {
            activePlayer["score"] += blackjackGame["cardsPoint"][card][1]
        } else {
            activePlayer["score"] += blackjackGame["cardsPoint"][card][0]
        }
    } else {
        activePlayer["score"] += blackjackGame["cardsPoint"][card]
    }
    
}

// Function : Show Score of Active Player
function showScore(activePlayer) {

    if (activePlayer["score"] > 21) {
        document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!"
        document.querySelector(activePlayer["scoreSpan"]).style.color = "red"
        document.querySelector(activePlayer["scoreSpan"]).style.fontWeight = "bold"
    } else {
        document.querySelector(activePlayer["scoreSpan"]).textContent = activePlayer["score"]
    }
    
}

// Function : Sleep / Wait Function for auto play of the dealer
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Function : Stand Button
// Dealer Gameplay
async function blackjackStand() {

    blackjackGame["isStand"] = true

    while ( (DEALER["score"] < 16) && (blackjackGame["isStand"] === true) ) {
        let card = generateRandomCard()
        showCard(card, DEALER)
        updateScore(card, DEALER)
        showScore(DEALER)
        await sleep(1000)
    }

    blackjackGame["turnsOver"] = true
    let winner = findWinner()
    showResult(winner)

    document.getElementById("standBtn").disabled = true
    
}

// Function : Computer Winner & return who just won
// Update the wins, losses and draws of the game
function findWinner() {
    let winner

    if (YOU["score"] <= 21) {

        // Condition : Higher score than dealer or when dealer busts but your score is 21 or under
        if ( (YOU["score"] > DEALER["score"]) || (DEALER["score"] > 21) ) {
            blackjackGame["wins"]++
            winner = YOU
        } else if (YOU["score"] < DEALER["score"]) {
            blackjackGame["losses"]++
            winner = DEALER
        } else if (YOU["score"] === DEALER["score"]) {
            blackjackGame["draws"]++
        } 

    // Condition : When User busts but Dealer doesn't
    } else if ( (YOU["score"] > 21) && (DEALER["score"] <= 21) ) {
        blackjackGame["losses"]++
        winner = DEALER
    
    // Condition : When User and Dealer both busts
    } else if ( (YOU["score"] > 21) && (DEALER["score"] > 21) ) {
        blackjackGame["draws"]++
    }

    return winner
}

// Function : Display Winner
function showResult(winner) {
    let message, messageColor

    if (blackjackGame["turnsOver"] === true) {

        if (winner === YOU) {
            document.querySelector("#wins").textContent = blackjackGame["wins"]
            message = "Congratulations! You Won! 🥳"
            messageColor = "green"
            winSound.play()
    
        } else if (winner === DEALER) {
            document.querySelector("#losses").textContent = blackjackGame["losses"]
            message = "Sorry! You Lost! 😢"
            messageColor = "red"
            lostSound.play()
    
        } else {
            document.querySelector("#draws").textContent = blackjackGame["draws"]
            message = "Match Tied! 😐"
            messageColor = "brown"
        }
    
        document.querySelector("#blackjack-result").textContent = message
        document.querySelector("#blackjack-result").style.color = messageColor
    }

    
}
