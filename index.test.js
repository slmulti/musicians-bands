const {db} = require('./db');
const {Band, Musician, Song} = require('./index')
const { seedBand, seedMusician, seedSong } = require('./Tests/bandMusicianSong')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        // done - test creating a band

        const testCreateBand = await Band.create(Band[0])
        expect(testCreateBand.name).toEqual(Band[0])
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Musician', async () => {
        // done - test creating a musician

        const testCreateMusician = await Musician.create(Musician[0])
        expect(testCreateMusician.name).toEqual(Musician[0])
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('Band can have many Musician', async () => {

        await db.sync({ force: true });

        let newBand = await Band.create({
            name: 'Foo Fighters',
            genre: 'Rock'            
        })

        let newMusician = await Musician.create({
            name: 'Dave Grohl',
            instrument: 'Singer'            
        })

        let oldMusician = await Musician.create({
            name: 'Lemmy',
            instrument: 'Bass'            
        })

        await newBand.addMusician(newMusician)
        await newBand.addMusician(oldMusician)

        const musicians = await newBand.getMusicians()

        expect(musicians[0] instanceof Musician).toBe(true)
    })

    test('Song belong to many Band and Band can have many Song', async () => {

        await db.sync({ force: true });

        //create bands
        let band1 = await Band.create(seedBand[0])
        let band2 = await Band.create(seedBand[1])

        //create songs
        let song1 = await Song.create(seedSong[0])
        let song2 = await Song.create(seedSong[1])

        await band1.addSong(song1)
        await band1.addSong(song2)

        await band2.addSong(song1)
        await band2.addSong(song2)

        const songs1 = await band1.getSongs()
        const songs2 = await band2.getSongs()

        expect(songs1[0] instanceof Song).toBe(true)
        expect(songs2[0] instanceof Song).toBe(true)

        // await song1.addBand(band1)
        // await song1.addBand(band2)

        // await song2.addBand(band1)
        // await song2.addBand(band2)

        // const bands1 = await song1.getBands()
        // const bands2 = await song1.getBands()

        // expect(bands1[0] instanceof Band).toBe(true)
        // expect(bands2[0] instanceof Band).toBe(true)

    })
})