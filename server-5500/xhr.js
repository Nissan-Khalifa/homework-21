const testBtn = document.querySelector('#testBtn')
const getSync = document.querySelector('#getSync')
const getAsync = document.querySelector('#getAsync')
const postSync = document.querySelector('#postSync')
const postAsync = document.querySelector('#postAsync')

testBtn.addEventListener('click', testLogger)
getSync.addEventListener('click', getDataSync)
// getSync.addEventListener('click', getStores)
getAsync.addEventListener('click', getDataAsync)
postSync.addEventListener('click', postDataSync)
postAsync.addEventListener('click', postDataAsync)

function testLogger() {
  console.log('I`m handled now!')
}

function getDataSync() {
  console.log('Get data in sync');
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://localhost:3000/stores-timeout', false)
  xhr.send()
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.response))
  } else {
    console.log(xhr.status)
  }
}

function getDataAsync() {
  console.log('Get data in Async');
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://localhost:3000/stores-timeout')
  xhr.send()
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.response))
    } else {
      console.log(xhr.status)
    }
  }
}


function getStores() {
  let stores = []
  console.log('Get data in sync');
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://localhost:3000/stores', false)
  xhr.send()
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.response))
    stores.push(JSON.parse(xhr.response))
  } else {
    console.log(xhr.status)
  }
  console.log(stores);
  return stores
}


function postDataSync() {
  console.log('post data in sync');
  const stores = [
    {
      "name": "Rami Levi",
      "departments": [1, 7]
    },
    {
      "name": "IKEA",
      "departments": [2, 3, 5, 6]
    },
    {
      "name": "Zol Stock",
      "departments": [4, 8]
    }
  ]

  const xhr1 = new XMLHttpRequest()
  xhr1.open('POST', 'http://localhost:3000/stores-timeout', false)
  xhr1.setRequestHeader('Content-Type', 'application/json;  charset=utf-8')
  xhr1.send(JSON.stringify(stores))

  if (xhr1.status === 200) {
    console.log(JSON.parse(xhr1.response))
  } else {
    console.log(xhr1.status)
  }

}

function postDataAsync() {
  console.log('post data in Async');
  const stores = [
    {
      "name": "Rami Levi",
      "departments": [1, 7]
    },
    {
      "name": "IKEA",
      "departments": [2, 3, 5, 6]
    },
    {
      "name": "Zol Stock",
      "departments": [4, 8]
    }
  ]

  const xhr = new XMLHttpRequest()
  xhr.open("POST", 'http://localhost:3000/stores-timeout')
  xhr.responseType = 'json'
  xhr.setRequestHeader('Content-Type', 'application/json;  charset=utf-8')

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response)
    } else {
      console.log(xhr.status)
    }
  }

  xhr.send(JSON.stringify(stores))
}