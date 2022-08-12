const {Band} = require('./Band')
const {Musician} = require('./Musician')
const { Song } = require('./song')

Musician.belongsTo(Band)
Band.hasMany(Musician)

Song.belongsToMany(Band, {through:'discography'})
Band.belongsToMany(Song, {through:'discography'})

module.exports = {
    Band,
    Musician,
    Song
};
