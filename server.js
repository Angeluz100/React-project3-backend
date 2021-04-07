const express = require("express");
const morgan = require("morgan");
const cors = require('cors');


const app = express();


require('dotenv').config();
require('./config/database');


app.use(morgan('dev'));
app.use(express.json());
app.use(cors());



app.use('/api/places', require('./routes/api/places'));


const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Exxpress is Listening for AJAX request on port ${port}`)
});