const express = require('express');
let app = express();
var port = 3000;

app.get('/', (req,res)=> {
  res.json({message: 'Hello from Express!'});
});

app.get('/page2', (req,res)=> {
  res.json({message: 'I am page two now!'});
});

app.listen(port, () => {
  console.log('Listening on port 3000!');
});
