const express = require("express");
const req = require("express/lib/request");
const app = express();
const fs = require("fs");

// built in middlewares
// express.static();
// express.json();
// express.urlencoded();

// // add middleware to request
// app.use(function (req, res, next) {
//     let date = new Date().toLocaleTimeString();
//     console.log(date);
//     let text = fs.readFileSync('./text.html', 'utf-8');
//     console.log(text);
//     next();
// });
// // basic express routing
// app.get("/", (req, res) => {
//     res.send("Ok this is express");
// });

// // listen a port
// app.listen(5000, err => {
//     if (err) throw err;
//     console.log("express app is running on port number 5000");
// });

// // basic routing
// app.get("/", (req, res) => {
//     res.sendFile(__dirname +"/index.html");
// });

// // listen port
// app.listen(4000, err => {
//     if (err) throw err;
//     console.log("express app is running on port number 4000");
// });

// custom middleware
app.use(function (req, res, next) {
  if (req.url === "/shashi") {
    console.log("My custom middleware is executing");
  }
  next();
});

// apply express.static built in middleware
app.use(express.static(__dirname + "/public"));

// basic routing
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(4000, err => {
  if (err) throw err;
  console.log("express app is running on port number 4000");
});
