'use strict';
const drinkModel = require('../model/drink.model/drinkModel')
const axios = require('axios');
const getDrinkData = (req, res) => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic').then(info => {
        const data = info.data.drinks.mab(drinks => {
            return new drinkModel(drinks)
        });
        res.send(data)
        console.loge(data);}).catch(error => console.log(error));
    }
    module.exports= getDrinkData;
    
