const {db} = require('./db');
const {Band, Musician} = require('./index')

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
        // TODO - test creating a band

        const testCreateBand = await Band.create(Band[0])
        expect(testCreateBand.name).toEqual(Band[0])
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician

        const testCreateMusician = await Musician.create(Musician[0])
        expect(testCreateMusician.name).toEqual(Musician[0])
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})