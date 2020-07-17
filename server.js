const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const auth = require('./routes/auth')
const mongoose = require('mongoose')
const bp = require('body-parser')
app.use(bp.json())
const postRoutes=require('./routes/posts')
require('dotenv/config')
const Joi = require('@hapi/joi')

app.use('/api/user', auth)
app.use('/api/posts',postRoutes)
app.use(express.json());


app.get('/1', (req, res) => {
    res.send('request fullfilled')
})

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log('connected to database') })



const PORT = 5000;
app.listen(PORT, '127.0.0.1', () => {
    console.log(`server started at port: ${PORT}`)
})