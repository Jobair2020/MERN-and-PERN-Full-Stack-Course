function person() {
    console.log("I am first")
}

function secondFun(){
    console.log("i am second")
}

// person()
// secondFun()
// setTimeout(person,3000)  //3 second por dekhabe.

fetch(
    'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
)

.then((response)=> response.json())
.then((jsonData) => console.log('data is',jsonData))