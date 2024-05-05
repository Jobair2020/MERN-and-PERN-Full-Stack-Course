const tableContainer = document.getElementById("table-container");
const tableContainerTop = document.getElementById("top-row");
const tableContainerBtm = document.getElementById("bottom-row");
// const textElement = document.createElement('h3')
const numberInput = document.getElementById("input-number");
const generateBtn = document.getElementById("generate");

// tableContainer.innerHTML = '<p> Hello</p>'
// textElement.innerText = 'Hello world'
// tableContainer.appendChild(textElement)

// generateBtn.addEventListener('click',function () {
//     const number = parseInt(numberInput.value)
//     tableContainer.innerHTML = ''

//     const table = document.createElement('table')
//     table.className = 'w-full border-collapse text text-center'

//     for (let i = 1; i <= 10; i++) {

//         const tableRow = document.createElement('tr')
//         tableRow.className = 'border-b'

//         const leftCell = document.createElement('td')
//         leftCell.innerText = `${number} * ${i}`

//         const rightCell = document.createElement('td')
//         rightCell.innerText = number * i

//         tableRow.appendChild(leftCell)
//         tableRow.appendChild(rightCell)

//         table.appendChild(tableRow)
//         // tableRow.innerText = `${number} * ${i} = ${number * i}`
//         // tableContainer.appendChild(tableRow)
//     }

//     tableContainer.appendChild(table)
// });

function generateTable(number) {
    // const number = parseInt(numberInput.value)
    // tableContainer.innerHTML = ''

    const table = document.createElement('table')
    table.className = 'w-full border-collapse text text-center'

    for (let i = 1; i <= 10; i++) {

        const tableRow = document.createElement('tr')
        tableRow.className = 'border-b'

        const leftCell = document.createElement('td')
        leftCell.innerText = `${number} * ${i}`

        const rightCell = document.createElement('td')
        rightCell.innerText = number * i

        tableRow.appendChild(leftCell)
        tableRow.appendChild(rightCell)

        table.appendChild(tableRow)
        // tableRow.innerText = `${number} * ${i} = ${number * i}`
        // tableContainer.appendChild(tableRow)
    }

    return table
}

generateBtn.addEventListener('click',function () {
    const number = parseInt(numberInput.value)
    tableContainerTop.innerHTML = ''
    tableContainerBtm.innerHTML = ''

    for (let i = 1; i <= 10; i++) {
        const table = generateTable(i)
        
        if( number <= 5){
            tableContainerTop.appendChild(table)
        }else{
            tableContainerBtm.appendChild(table)
        }
        
    }
    // const table1 = generateTable(1)
    // tableContainer.appendChild(table1)
    // const table2 = generateTable(2)
    // tableContainer.appendChild(table2)
    // const table3 = generateTable(3)
    // tableContainer.appendChild(table3)
});



function add(a,b,postResultCalculationFunction){
    const sum = a+b
    postResultCalculationFunction(sum)
}
function add(a,b,callback){
    const sub = a-b
    callback(sub)
}
function printResult(res){
    console.log(`result = ${res}`)
}

add(5,6,printResult)

function login(gmail,password) {
    //asynchronous javascript
}