const fsp = require('fs').promises;
const Plant = require('../models/plant.model');
const Garden = require('../models/garden.model');
const Hortus = require('../models/hortus.model');
const User = require('../models/user.model');
const Shop = require('../models/shop.model');

const seedCollection = async (model, fileName) => {
    try {
        const exists = await model.find().count();
        if (!exists) {
            throw new Error();
        }
    } catch (e) {
        const source = await fsp.readFile(
            `./src/seed/${fileName}.json`, 
            'utf8'
        );
        const list = JSON.parse(source);
        if (model && model.insertMany) {
            await model.insertMany(list, {limit: 100});
        }
    }
};

( async () => {

    seedCollection(Plant, 'plants');
    seedCollection(Garden, 'gardens');
    seedCollection(Hortus, 'hortus');
    seedCollection(Shop, 'shop');
    seedCollection(User, 'users');

})();