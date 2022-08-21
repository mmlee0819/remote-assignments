/*
Assignment 1: Function and Array
  Complete the function below to find the max number of the passing array of numbers.
  Reminder: you can't use built-in Math.max() or sort() to complete this assignment.
*/

// My first solution: print the result in the console
function max(numbers) {
  let maxNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i]
    }
  }
  return maxNumber
}
console.log(max([1, 2, 4, 5]))
console.log(max([5, 2, 7, 1, 6]))

// My second solution: function with the spread syntax, display the result on the page
const arrA = [1, 2, 4, 5]
const arrB = [5, 2, 7, 1, 6]
const assignment1 = document.querySelector('.assignment-1')

function max2(...arr) {
  let maxNumber = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i]
    }
  }
  assignment1.innerHTML += `<p>The max number inside [ ${arr.join(', ')} ] is ${maxNumber}</p>`
}
max2(...arrA); // result to 5
max2(...arrB); // result to 7


/*
Assignment 2: Object
Complete the function below to calculate the result of the passing object.
*/
const assignment2 = document.querySelector('.assignment-2')
function calculate(args) {
  const n1 = Object.keys(args)[0]
  const n2 = Object.keys(args)[1]
  const op = Object.keys(args)[2]
  const n1Value = Object.values(args)[0]
  const n2Value = Object.values(args)[1]
  const opValue = Object.values(args)[2]
  let result = 0
  let disPlayFirstPart = `<p> { ${n1}: ${n1Value},  ${n2}: ${n2Value},  ${op}: ${opValue} }</p>`
  if (opValue === '+') {
    result = n1Value + n2Value
    console.log(result)
    assignment2.innerHTML += `${disPlayFirstPart} <p> result to ${result} </p>`
  } else if (opValue === '-') {
    result = n1Value - n2Value
    console.log(result)
    assignment2.innerHTML += `${disPlayFirstPart} <p> result to ${result} </p>`
  } else {
    console.log('Not supported')
    assignment2.innerHTML += `${disPlayFirstPart} <p> result to Not supported </p>`
  }
}

calculate({ n1: 2, n2: 3, op: '+' }); // result to 5
calculate({ n1: 5, n2: 2, op: '-' }); // result to 3
calculate({ n1: 1, n2: 6, op: 'x' }); // result to 'Not supported'

/*
Assignment 3: Function, Array, and Object
  Complete the function below 
  to calculate the total price of all products after applying a discount.
*/

const assignment3 = document.querySelector('.assignment-3')
function calculate2(data) {
  // your code here
  let totalPrice = 0
  let productsInfo = data.products
  for (let i = 0; i < productsInfo.length; i++) {
    productsInfo[i].specialOffer = productsInfo[i].price * (1 - data.discount)
    totalPrice += productsInfo[i].specialOffer
  }
  console.log(totalPrice)
  return totalPrice
}

/* Display the result in the console */
calculate2({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100
    },
    {
      name: "Product 2",
      price: 700
    },
    {
      name: "Product 3",
      price: 250
    }
  ]
}) // show the total price of all products after applying a discount

/* Display the result on the page*/
const onSale = {
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100
    },
    {
      name: "Product 2",
      price: 700
    },
    {
      name: "Product 3",
      price: 250
    }
  ]
}
assignment3.innerHTML += `<p>The total price of all products after applying a discount is ${calculate2(onSale)}.</p>`