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

// async function mainMusician(){
    
//     await Musician.sync({force:true})

//     await Musician.create({
//         name: 'Dave Grohl',
//         instrument: 'Drums'
//     })

//     await Musician.create({
//         name: 'Slash',
//         instrument: 'Guitar'
//     })

//     await Musician.create({
//         name: 'Lemmy',
//         instrument: 'Bass'
//     })

//     await Musician.create({
//         name: 'Stevie Wonder',
//         instrument: 'Keyboard'
//     })

// }

// mainMusician()

module.exports = {
    Musician
};