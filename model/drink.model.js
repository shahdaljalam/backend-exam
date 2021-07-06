'use strict';
const mongoose = require('mongoose');
const drinkSchema = mongoose.Schema({
    strDrink: {
        type: String,
        unique: true,
        lowercase: true
    },
    strDrinkThumb: String
})
const drinkModel = mongoose.model('drink', drinkSchema);

module.export = drinkModel;