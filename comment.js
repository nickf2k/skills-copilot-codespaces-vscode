// Create web server

const express = require('express');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static('public'));

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/', require('./routes/index'));
app.use('/comments', require('./routes/comments'));

app.listen(port, () => console.log(`Server listening on port ${port}`));