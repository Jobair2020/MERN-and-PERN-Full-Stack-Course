const fieldOne = document.getElementById("number1")
const fieldTwo = document.getElementById("number2")
const compareBtn = document.getElementById("compare")
const result = document.getElementById("result")

const mark = document.getElementById("mark")
const gradeBtn = document.getElementById('grade-btn')
const resultGrade = document.getElementById('grade-result')

function compare() {
  const num1 = parseInt(fieldOne.value)
  const num2 = parseFloat(fieldTwo.value)

  // console.log(typeof num1,typeof num2)

  if (num1 === num2) {
    result.innerHTML = "<h1> Equal </h1>"
  } else if (num1 > num2) {
    result.innerHTML = "<h1> number 1 is greater than number 2 </h1>"
  } else {
    result.innerHTML = "<h1> number 1 is less than number 2 </h1>"
  }
}

function grade() {
  const marks = parseInt(mark.value)
    let grade = null
  if (marks >= 80 && marks <= 100) {
    grade = 'A+'
  } else if (marks >= 70 && marks < 80) {
    grade = 'A'
  } else if (marks >= 60 && marks < 70) {
    grade = 'A-'
  } else if (marks >= 50 && marks < 60) {
    grade = 'B'
  } else if (marks >= 40 && marks < 50) {
    grade = 'C'
  }else if (marks >= 33 && marks < 40) {
    grade = 'D'
  } else {
    grade = 'F'
  }
  resultGrade.innerHTML = "Grade : " + grade
  
  return
}

function biggerNumber(a, b, c) {
  let max = a
  if (b > max) {
    max = b
  }
  if (c > max) {
    max = c
  }
  console.log(max)

  // if(a>b){
  //     if(a>c){
  //         console.log(a)
  //     } else {
  //         console.log(c)
  //     }
  // }else {
  //     if(b > c){
  //         console.log(b)
  //     } else {
  //         console.log(c)
  //     }
  // }
}

// compareBtn.addEventListener('click',function compare () {
//     alert('Clicked')
// })
// callback function. function as a parameter

compareBtn.addEventListener("click", compare)
gradeBtn.addEventListener('click',grade)
