const { DataTypes } = require('sequelize');
const {db} = require('./db');


// done - define the Band model
let Band = db.define('Band',{
    name: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    }
})


module.exports = {
    Band
};