const PwElement = document.getElementById("pw")
const copyElement = document.getElementById("copy")
const lenElement = document.getElementById("len")
const upperElement = document.getElementById("upper")
const lowerElement = document.getElementById("lower")
const numberElement = document.getElementById("number")
const symbolElement = document.getElementById("symbol")
const generateElement = document.getElementById("generate")

const uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseletters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbol = "!@#$%^&*()_";

function getLowercase() {
    return lowercaseletters[Math.floor(Math.random() * lowercaseletters.length)]
}

function getUppercase() {
    return uppercaseletters[Math.floor(Math.random() * uppercaseletters.length)]
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
    return symbol[Math.floor(Math.random() * symbol.length)]
}

function generatePassword() {
    const len = lenElement.value
    let password = ""
    for (i = 0; i < len; i++) {
        const x = generateX()
        password += x
    }
    PwElement.innerText = password
}

function generateX() {
    const random = []

    if (upperElement.checked) {
        random.push(getUppercase())
    }
    if (lowerElement.checked) {
        random.push(getLowercase())
    }
    if (numberElement.checked) {
        random.push(getNumber())
    }
    if (symbolElement.checked) {
        random.push(getSymbol())
    }
    if (random.length === 0) {
        random.push(getLowercase()) + random.push(getUppercase()) + random.push(getNumber()) + random.push(getSymbol())
    }
    return random[Math.floor(Math.random() * random.length)]

};
generateElement.addEventListener("click", generatePassword);