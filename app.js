const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');

// set up express app
const app = express();
// Middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

const dbURI ='mongodb+srv://hernandezabimael:M62QkEBbPq9cPFRz@blog-app-node.00eswjc.mongodb.net/?retryWrites=true&w=majority&appName=blog-app-node'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(res => {
  app.listen(3000, () => {
    console.log('port 3000 express instance');
  });
})
.catch(err => console.error('Could not connect to MongoDB', err));

// register view engine
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  // res.sendFile('./views/index.html', {root: __dirname});
  // render a view
  res.redirect('/blogs')
});

app.use('/blogs', blogRoutes);  // use the blog routes middleware

app.get('/about', (req, res) => {
  // res.sendFile('./views/about.html', {root: __dirname});
  res.render('about', {title: 'About page ejs'});
});


// redirect 
app.get('/about-me', (req, res) => {
  res.redirect('/about', {title: 'Should be in about'});
});

// 404 page as a default middleware
app.use((req, res)=> {
  // res.status(404).sendFile('./views/404.html', {root: __dirname});
  res.status(404).render('404', {title: '404 set in middleware'});
})


