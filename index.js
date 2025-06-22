const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());

const ProductRoute = require('./Routes/productRoute');
app.use(ProductRoute);
const dbDriver = process.env.DB_URI || 'mongodb://127.0.0.1:27017/crudop';

const PORT = 9000;

mongoose.connect(dbDriver).then(()=>{
    app.listen(PORT,()=>{
        console.log('Server is running on', PORT)
    })
})






