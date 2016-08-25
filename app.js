require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const locals = require('./locals.js');


let app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.localsAsTemplateData(app);

locals(app);

app.get('/', (req,res)=> {
  res.render("home", {
    // cohortName: 'g[31]',
    foods: [
      'Mexican',
      'American',
      'Italian'
    ]
  });
});

app.get('/page2', (req,res)=> {
  res.render("page2");
});

app.get('/page3', (req,res)=> {
  res.render("page3");
});

console.log(process.env);

app.listen(port, () => {
  console.log("Listening on port "+port+'!');
});
