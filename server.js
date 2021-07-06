const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp',
 {useNewUrlParser: true});

const app = express() 
const PORT = process.env.PORT
app.use(cors())
app.use(express.json())
const getDrinkData = require('./controller/drink.controller')
const{ creatDrink,readDrink,deletedrink,updateDrink}=require('./controller/curd.controller');
app.get('/dinks', getDrinkData );
app.post('/dink', creatDrink );
app.get('/dink', readDrink );
app.delete('/dink', deletedrink );
app.put('/dink', updateDrink );





app.get('/', (req, res) => {
res.send('server working')
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});