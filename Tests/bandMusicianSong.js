const { Band, Musician, Song} = require('/Users/simon/Desktop/multiverse/W6D4/musicians-bands/index')
const {db} = require('../db')

//======================================================================
// Create Band
//======================================================================

// async function mainBand(){
    
//     await Band.sync({force:true})

//     await Band.create({
//         name: 'Foo Fighters',
//         genre: 'Rock'
//     })

//     await Band.create({
//         name: 'Guns N Roses',
//         genre: 'Rock'
//     })

//     await Band.create({
//         name: 'Motorhead',
//         genre: 'Heavy Rock'
//     })

//     await Band.create({
//         name: 'Stevie Wonder',
//         genre: 'Rock n Roll'
//     })

// }

// mainBand()

//======================================================================
// Create Musician
//======================================================================

// async function mainMusician(){
    
//     await Musician.sync({force:true})

//     await Musician.create({
//         name: 'Dave Grohl',
//         instrument: 'Singer'
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

//======================================================================
// Create Song
//======================================================================

// async function mainSong(){

//     await Song.sync({force:true})

//     await Song.create({
//         title: 'Best of You',
//         year: 2005
//     })

//     await Song.create({
//         title: 'Ace of Spades',
//         year: 1980
//     })

// }

// mainSong()

const seedBand = [
    {
        name: 'Foo Fighters',
        genre: 'Rock'
    },
    {
        name: 'Guns N Roses',
        genre: 'Rock'
    },
    {
        name: 'Motorhead',
        genre: 'Heavy Rock'
    },
    {
        name: 'Stevie Wonder',
        genre: 'Rock n Roll'
    }

]

const seedMusician = [
    {
        name: 'Dave Grohl',
        instrument: 'Singer'
    },
    {
        name: 'Slash',
        instrument: 'Guitar'
    },
    {
        name: 'Lemmy',
        instrument: 'Bass'
    },
    {
        name: 'Stevie Wonder',
        instrument: 'Keyboard'
    },
]

const seedSong = [
    {
        title: 'Best of You',
        year: 2005
    },
    {
        title: 'Ace of Spades',
        year: 1980
    },
    {
        title: 'Welcome to the Jungle',
        year: 1987
    },
    {
        title: 'Superstition',
        year: 1972
    }
]

module.exports = { seedBand, seedMusician, seedSong }