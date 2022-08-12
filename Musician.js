const { DataTypes } = require('sequelize');
const {db} = require('./db');


// done - define the Musician model
let Musician = db.define('Musician',{
    name: {
        type: DataTypes.STRING
    },
    instrument: {
        type: DataTypes.STRING
    }
})



module.exports = {
    Musician
};