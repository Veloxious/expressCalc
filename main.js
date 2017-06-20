const express = require("express");
const app = express();

app.get('/:operator/:num1/:num2', function(req, res) {
  let operator = req.params.operator
  let x = parseInt(req.params.num1)
  let y = parseInt(req.params.num2)
  let result = 0
  switch (operator) {
    case 'add':
      result = eval(x + y)
      res.send(`<html><body>${result}</body></html>`)
      break
    case 'subtract':
      result = eval(x - y)
      res.send(`<html><body>${result}</body></html>`)
      break
    case 'multiply':
      result = eval(x * y)
      res.send(`<html><body>${result}</body></html>`)
      break
    case 'divide':
      result = eval(x / y)
      res.send(`<html><body>${result}</body></html>`)
      break
    case 'power':
      result = Math.pow(x, y)
      res.send(`<html><body>${result}</body></html>`)
      break
  }
})

app.listen(3000, function(){
  console.log("Calculator is running")
})
