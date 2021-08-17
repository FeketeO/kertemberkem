require('dotenv').config();

const app = require('./server');
const supertest = require('supertest');
const mongoose = require('mongoose');

jest.mock('./auth/authenticate');
jest.mock('./auth/adminOnly');
jest.mock('./auth/selfOnly');

const Plant = require('./models/plant.model');
const User = require('./models/user.model');
const Shop = require('./models/shop.model');
const Garden = require('./models/garden.model');
const Hortus = require('./models/hortus.model');

describe('REST API integration tests', () => {

    beforeAll(async () => {
        
        const connectionString = `mongodb+srv://admin01:${process.env.DB_PASSW}@cluster0.mcfhb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    });

    afterAll(async () => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
    });

    afterEach(async () => {
        const collections = Object.keys(mongoose.connection.collections);

        for (const collectionName of collections) {
            const collection = mongoose.connection.collections[collectionName];
            await collection.deleteMany();
        }
    });

    // =========== shop tests

    const shopData = [
        {
            name: 'Test1',
            city: 'TestCity1',
            address: 'TestAddress1',
            url: 'TestUrl1',
            url: 'TestNote1',  


        },
        {
            name: 'Test2',
            city: 'TestCity2',
            address: 'TestAddress2',
            url: 'TestUrl2',
            url: 'TestNote2',
        }
    ];

    // find all shops
    test('GET /shops', () => {
        return Shop.insertMany(shopData)
            .then(() => supertest(app).get('/shops').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(shopData.length);

                response.body.forEach((shop, index) => {
                    expect(shop.name).toBe(shopData[index].name);
                });
            });
    });
// =========== plant tests

const plantData = [
    {
        name: 'Test1',
        latinName: 'TestlatinName1',
        colour: 'Testcolour1',
        waterDemand: 'TestwaterDemand1',
        lightDemand: 'TestlightDemand1', 
        soilDemand: 'TestsoilDemand1',
        blooming: 'Testblooming1',
        lifeCycles: 'TestlifeCycles1',
        type: 'Testype1',
        toxic: 'Testtoxic1',   
        uevergreenrl: 'Testevergreen1',   

    },
    {
        name: 'Test2',
        latinName: 'TestlatinName2',
        colour: 'Testcolour2',
        waterDemand: 'TestwaterDemand2',
        lightDemand: 'TestlightDemand2', 
        soilDemand: 'TestsoilDemand2',
        blooming: 'Testblooming2',
        lifeCycles: 'TestlifeCycles2',
        type: 'Testype2',
        toxic: 'Testtoxic2',   
        uevergreenrl: 'Testevergreen2',  
    }
];
    // find a single plant
    test('GET /plants/:id', () => {
        const insertedPlants = plantData[0];

        return Plant.insertMany(insertedPlants)
            .then(insertedPlants => supertest(app).get(`/plant/${insertedPlants[0]._id}`).expect(200))
            .then(response => {
                const plant = response.body;
                expect(plant.name).toBe(insertedPlants.name);
            });
    });

    // =========== users tests

    // a newly inserted user is stored with 'user' role
    test('POST users', () => {
        const newUser = {
            email: 'email@test',
            firstName: 'first',
            lastName: 'last',
            city: 'city',
            address: 'adress',
            password: 'pwd',
            role: 'admin',
            accessToken: 'accessToken'
        };

        return supertest(app).post('/users').send(newUser).expect(201)
            .then(() => User.findOne({ email: newUser.email }))
            .then(savedUser => {
                expect(savedUser.role).toEqual('user');
            });
    });

    // =========== hortus tests

    // find all books
    test('GET /hortus', async () => {
        
        const hortusData = [
            {
                name: 'name',
                plantList: 'plantList',
                note: 'note',
                url: 'url'
            },
        ];
        await Hortus.insertMany(hortusData);

        await supertest(app).get('/hortus').expect(200)
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(hortusData.length);

                response.body.forEach((hortus, index) => {
                    expect(hortus.name).toBe(hortusData[index].name);
                    expect(hortus.plantList).toBe(hortusData[index].plantList);
                    expect(hortus.note).toBe(hortusData[index].note);
                    expect(hortus.url).toBe(hortusData[index].url);
                });
            });
    });

    // =========== garden tests

    // edit an author
    test('PUT /gardens/:id', async () => {
        const gardenData = {
            user: 'user',
            garden: 'garden',
            note: 'note'
        };

        const garden = await Garden.create(gardenData);
        gardenData._id = garden.id;

        gardenData.user = 'modified user';
        gardenData.garden = 'garden';
        gardenData.note = null;

        await supertest(app).put(`/gardens/${gardenData._id}`).send(gardenData).expect(200)
            .then(response => {
                const modifiedGarden = response.body;

                expect(typeof modifiedGarden).toEqual('object');
                expect(modifiedGarden.user).toBe(gardenData.user);
                expect(modifiedGarden.garden).toBe(gardenData.garden);
                expect(modifiedGarden.note).toBe(gardenData.note);
            });
    });
});