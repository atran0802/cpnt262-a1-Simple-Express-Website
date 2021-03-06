const path = require('path');
const express = require('express');
const pageInfo = require('./pageInfo');
const ejs = require('ejs');

/* Runs express */
const app = express();

/* Runs moments module for footer */
const moment = require('moment');
const year = "YYYY";

app.locals.moment = require("moment");
app.locals.year = year;

/* Runs ejs */
app.set('view engine', 'ejs');

/* Get endpoint handlers to render */
app.get('/',function(req, res) {  
  res.render('index',pageInfo.index);
});

app.get('/about',function(req, res) {  
  res.render('about',pageInfo.about);
});

app.get('/services',function(req, res) {  
  res.render('services',pageInfo.services);
});

app.get('/contact',function(req, res) {  
  res.render('contact',pageInfo.contact);
});

/* Serving static files in express */
app.use(express.static(path.join(__dirname, 'public')));

/* Returns 404 error */
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

/* Localhost: 3000 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});