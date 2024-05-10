const productList = ['pen','paper','rice','soap','oil']
productList.length
productList.values

//javascript array methods.


// for(let i = 0 ;i < productList.length ; i ++ ){
//     console.log(`item ${i+1} is ${productList[i]}`)
// }

//iterates for every item by give function


// productList.forEach(function showItem(item,index) 
// {
//     console.log(`item ${index+1} is ${item}`)
// })

// item , index = productList.forEach()

// const productUpList = productList.map(function map(item) 
// {
    // return item.toUpperCase()
    
// })
// console.log(productUpList)
const numbers = [1, 2, 3, 4, 6, 7, 12];

const double = numbers.map(function (item,index){

    if(index % 2 == 0){
        return item * 2;
    }else{
        return item * 3;
    }

    // return item * 2
})
console.log(double)



