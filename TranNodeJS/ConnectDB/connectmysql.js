// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "root"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

// var express = require('express')
// var cors = require('cors')
// var app = express()

// app.options('/products/:id', cors()) // enable pre-flight request for DELETE request
// app.del('/products/:id', cors(), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

// app.listen(3000, function () {
//   console.log('CORS-enabled web server listening on port 3000')
// })

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})