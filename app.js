const express = require('express');

// set up express app
const app = express();

// register view engine

app.set('view engine', 'ejs');
// app.set('views', './views-ejs');

// liste for request  
app.listen(3000, () => {
  console.log('Listening on port 3000 express instance');
});

app.get('/', (req, res) => {
  // res.sendFile('./views/index.html', {root: __dirname});
  // render a view
  // res.render('index', {
  //   title: 'Home Page',
  //   message: 'Welcome to the home page'
  // });
  const blogs = [
    {title: 'Blog 1 here', content: 'First blog post'},
    {title: 'Blog 2 two', content: 'Second blog post'},
    {title: 'Blog 3 best', content: 'Third blog post'}
  ]

  res.render('index', {title: 'Home page ejs', blogs});
});

app.get('/about', (req, res) => {
  // res.sendFile('./views/about.html', {root: __dirname});
  res.render('about', {title: 'About page ejs'});
});

app.get('/blogs/create', (req, res) => {
  // res.send('<h1>contact page </h1>');
  res.render('create', {title : 'Create blog page ejs'});
});

// redirect 
app.get('/about-me', (req, res) => {
  res.redirect('/about', {title: 'Home page ejs'});
});


// 404 page as a default middleware
app.use((req, res)=> {
  // res.status(404).sendFile('./views/404.html', {root: __dirname});
  res.status(404).render('404', {title: '404 page ejs'});
})