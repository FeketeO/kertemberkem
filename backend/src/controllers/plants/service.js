const Plant = require('../../models/plant.model');

exports.create = plantData => {
    const plant = new Plant(plantData);
    return plant.save();
};

exports.findAll = () => Plant.find().populate();

exports.findOne = id => Plant.findById(id).populate();

exports.update = (id, updateData) => Plant.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = async id => {

    const doc = await Plant.findByIdAndRemove(id);

    if (!doc) {
        throw new Error('Not found');
    }
    return doc.delete();
}