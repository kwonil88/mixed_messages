console.log("hello");

const messages = {
    sports_teams: ["Buccaneers", "Patriots", "Celtics"],
    motivation: ["believe you can and you're halfway there", "push yourself, because no one else is gonna do it for you", "great things never come from comfort"],
    jokes: ["I don't trust stairs; they are always up to something", "What do you call someone with no body and no nose? Nobody knows", "Why couldn't the bicycle stand by itself? Because it was two tired"]
}

const generateRandomNumber = num => {
    return Math.floor(Math.random() * num)
}

function generateRandomMessage() {
    let words = [];
    for (let category in messages) {

        let randomIndex = generateRandomNumber(messages[category].length)


        switch (category) {
            case "sports_teams":
                words.push(`your favorite sports team is ${messages[category][randomIndex]}`)
                break;
            case "motivation":
                words.push(`Here is your motivational message: ${messages[category][randomIndex]}`)
                break;
            case "jokes":
                words.push(`Dad joke of the day: ${messages[category][randomIndex]}`)
                break
            default:
                words.push('There is not enough info.')
        }

    }
    console.log(words);
}

generateRandomMessage();