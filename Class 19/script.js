// const tableContainer1 = document.getElementById("table-container-1");
// const textElement = document.createElement('h3')
const numberInput = document.getElementById("input-number");
const generateBtn = document.getElementById("generate");

// tableContainer.innerHTML = '<p> Hello</p>'
// textElement.innerText = 'Hello world'
// tableContainer.appendChild(textElement)

// generateBtn.addEventListener('click',function () {
//     const number = parseInt(numberInput.value)
//     tableContainer.innerHTML = ''
//     for (let i = 1; i <= 10; i++) {

//         tableRow.innerText = `${number} * ${i} = ${number * i}`
//         tableContainer.appendChild(tableRow)
//     }
// });

function generateMultiplier() {
  const result = document.getElementById("result");
  
  for (let i = 1; i <= 10; i++) {
    const container = document.createElement("div");
    container.className = "px-2 py-2";
    for (let j = 1; j <= 10; j++) {
      const tableRow = document.createElement("h4");
      tableRow.innerText = `${i} x ${j} = ${i * j}`;
      container.appendChild(tableRow);
    }
    result.appendChild(container);
  }
}

window.onload = function () {
  generateMultiplier();
};

// let count = 0

// for (let i = 0; i < 10; i++) {
//     console.log('Hello')

// }

// while (count < 10 ) {
//     console.log(` ${count+1} Hello`)
//     count++
// }

// let count = 1

// while (count < 10 ) {
//     console.log(` ${count} Hello`)
//     count+=2
// }

// for (let i = 10; i > 1; i-=2) {
//     console.log(`${i} Hi`)

// }

// for (let i = 1; i < 11; i++) {
//     console.log(`${i} * 5 = ${i*5}`)
// }
