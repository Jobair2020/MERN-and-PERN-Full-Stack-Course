const numbers = [1, 2, 3, 4, 6, 7, 12];
const productList = ['pen','paper','rice','soap','oil']
const btn = document.getElementById('generate')
const listContainer = document.getElementById('list')

const btnMap = document.getElementById('generate-map')
function clearListContainer(){
    listContainer.innerHTML = ''
}

btn.addEventListener('click',function(){
    clearListContainer()

    productList.forEach(function (product){
        const productElement = getProductItem(product,'blue')
        const listItem = document.createElement('li')
        listItem.appendChild(productElement)
        listContainer.appendChild(listItem)
    })


})

function getProductItem (product,bgColor='white',borderColor='sky' ) {
    const productElement = document.createElement('div')
    productElement.className = `flex border border-${borderColor}-500 my-2 justify-center bg-${bgColor}` 
    productElement.innerText = product.toUpperCase()

    return productElement
}


btnMap.addEventListener('click',function () {
    clearListContainer();
    const listItems = productList.map(function (product,index){
        let bgColor = 'white'
        if(index % 2 === 1){
            bgColor = 'nautral-200'
        }
        return getProductItem(product,bgColor,'red')
    })

    listContainer.append(...listItems)
})


const a = [ 1,3,4,5,67,8,90]
const b = [...a]
function add(num1,num2){
    return num1 + num2
}

add(...[5,6]) //destructure
// listContainer.append('item1','item2')


const products = [{id:1,name:'pen'},{id:2,name:'paper'}]

const productNames = products.map(function (product){
    return {
        upperCaseName:product.name.toUpperCase()
    }
})

console.log(productNames)