const { DataTypes } = require('sequelize');
const {db} = require('./db');


// done - define the Song model
let Song = db.define('Song',{
    title: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.NUMBER
    }
})



module.exports = {
    Song
};