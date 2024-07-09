const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {
  // res.setHeader('Content-type', 'text/html')
let path = './views'

// lodash 
const num = _.random(1, 100)
console.log('num', num)

const greet = _.once(() => {
  console.log('greeting Earth : :::')
})


greet()
greet()


// simple routing only node 
switch (req.url) {
  case '/':
    path += '/index.html'
    res.statusCode = 200
    break
  case '/about':
    path += '/about.html'
      res.statusCode = 200
    break
  case '/about-me':
    console.log('about-me case :::')
      res.statusCode = 301
      res.setHeader('Location', '/about')
      res.end()
    break
  default:
    path += '/404.html'
    res.statusCode = 404
    break
}

  // send html file instead
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log('error getting file', err)
    } else {
      res.write(data)
      res.end()
    }
  })
  
})

server.listen(3000, 'localhost', () => {
  console.log('Listening on port 3000')
})