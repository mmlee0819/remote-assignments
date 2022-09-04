// Assignment 1 : Callback Function

function delayedResult(n1, n2, delayTime, callback) {
  let result = n1 + n2
  setTimeout(function () { callback(result) }, delayTime)
}


delayedResult(4, 5, 3000, function (result) {
  console.log(result)
})

delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
})


// Assignment 2 : Callback Function and Advanced HTML DOM

function ajax(src, callback) {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(JSON.parse(xhr.response))
    }
  }
  xhr.open('GET', src)
  xhr.send()
  xhr.onload = function (response) {
    response = JSON.parse(xhr.response)
    callback(response)
  }
}

function render(data) {
  const assignment2 = document.querySelector('#assignment2')
  data.forEach(data => assignment2.innerHTML += `
      <p>Product: ${data.name}</p>
      <p>Price: ${data.price}</p>
      <p>Description: ${data.description}</p><br><br>`
  )
}


ajax("https://appworks-school.github.io/Remote-Assignment-Data/products",
  function (response) {
    render(response);
  }
)
