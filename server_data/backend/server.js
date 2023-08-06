const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const colors = require('colors');
const cors = require('cors');



// Connect database
const connect_db = require('./config/db');
connect_db();
// port
const port = process.env.PORT;

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Users
app.use('/account/users', require('./router/userRouter'));
app.use('/product/addProduct', require('./router/productRouter'));

app.listen(port, () => {
    console.log(`Server is running successfully on the port: ${port}`);
});
