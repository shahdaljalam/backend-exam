const drinkModel = require('../model/drink.model/drinkModel');

const creatDrink = (req, res) => {
    const { strDrink, strDrinkThumb } = req.body
    drinkModel.find({ strDrink: strDrink }, (error, data) => {
        if (data.lengh > 0) {
            res.send('allready exist')
        }
        else {
            data = new drinkModel({
                strDrink: strDrink,
                strDrinkThumb: strDrinkThumb
            })
            data.save()
            res.send(data)
        }
    }
    )
}

const readDrink = (req.res)=> {
    drinkModel.find((erroe, data) => {
        if (error) {
            res.send(error)
        }
        else {
            res.send(data)
        }
    })
}

const deletedrink = (req, res) => {
    const strDrink = req.params.strDrinkId
    drinkModel.remove({ strDrink: strDrink }, (error, data) => {
        if (error) {
            res.send(error)
        }
    }).then()=> {
    drinkModel.find((error), data)=> {
        if (error) {
            res.send(error)
        }
        else {
            res.send(data)
        }
    }
}

const updateDrink = (req, res) => {
    const strDrink = req.params.strDrinkId
    drinkModel.findOne({ strDrink: strDrink }, (error, data) => {
        if (error) {
            res.send(error)
        } 
        else {
            data.strDrink = strDrink,
                lowercase = lowercase
        }
        data.save()
    
    })}

    module.exports = {
        creatDrink,
        readDrink,
        deletedrink,
        updateDrink
    }

