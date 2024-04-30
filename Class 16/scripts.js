
// const a = 4
// console.log(a)
// let b = 10
// let c = a + b
// console.log(c)
// const secondHeader = document.getElementById("header-2")
// console.log(secondHeader)

// secondHeader.innerText = "Welcome"

    // document.getElementById("header-1")
    // document.getElementById("header-1").innerText = "Hi there"
    // document.getElementsByTagName("p");
    // document.getElementById("header-2").style.color = "red"

// const button = document.getElementById("btn")
// button.innerText = "Clicked" ; 

function updateButtonText(text) {
    const button = document.getElementById("btn")
    button.innerText = text 
}
// updateButtonText("simple button")
let a = 1
function onClickButton(){
    console.log("Button is clicked")

    if (a == 1) {
        updateButtontext('Simple Button')
        a = 0
    }
    else
    {
        updateButtontext('Click me')
        a = 1
    }
}

function getButtonElement(){
    const button = document.getElementById("btn")
    return button
}
const button = getButtonElement();
// const button = document.getElementById("btn")
// button.addEventListener('click',onClickButton)

getButtonElement().addEventListener('click',onClickButton)
// getButtonElement().innerText = "Click me"

// getButtonElement().addEventListener('click',updateButtonText('hello'))



