const express = require('express');
const hbs = require('hbs');
const locals = require('./locals.js');

let app = express();
var port = 3000;

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

app.listen(port, () => {
  console.log('Listening on port 3000!');
});
