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

// async function mainBand(){
    
//     await Band.sync({force:true})

//     await Band.create({
//         name: 'Dave Grohl',
//         genre: 'Rock'
//     })

//     await Band.create({
//         name: 'Slash',
//         genre: 'Rock'
//     })

//     await Band.create({
//         name: 'Lemmy',
//         genre: 'Heavy Rock'
//     })

//     await Band.create({
//         name: 'Stevie Wonder',
//         genre: 'Rock n Roll'
//     })

// }

// mainBand()

module.exports = {
    Band
};