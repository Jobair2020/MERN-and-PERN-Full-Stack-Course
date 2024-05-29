const numberList = [1,2,3,45]
numberList.push(0)
numberList.unshift(2) //insert at the begining
// console.log(numberList) //delete from first
numberList.shift()
// console.log(numberList)


// console.log(numberList.slice(3))
// console.log(numberList.slice(0,4))
// console.log(numberList.slice(-3,-1))

// console.log(numberList.splice(3,1))
// console.log(numberList.splice(numberList.length - 1 ,1))
// console.log(numberList)

numberList.splice(1,2)
// console.log(numberList)

const numbers = [1,2,3,4,5,6,7,8]
numbers.splice(2,0,50)
console.log(numbers)
numbers.splice(4,0,51,52,53,54)
console.log(numbers)

const list1 = ['pen','paper','water']
const list2 = ['car','truck','rice','mobile','computer']

list1.splice(2,0,...list2)

console.log(list1)

list2.reverse()
console.log(list2)
// list2.join()

const complexList = [1,2,3,[4,5,6],7,[8,9]]
complexList.flat()
console.log(complexList)
