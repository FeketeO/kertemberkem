const Garden = require('../../models/garden.model');

exports.create = gardenData => {
    const garden = new Garden(gardenData);
    return garden.save();
};

exports.findAll = () => Garden.find().populate();

exports.findOne = id => Garden.findById(id).populate();

exports.update = (id, updateData) => Garden.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = async id => {

    const doc = await Garden.findByIdAndRemove(id);

    if (!doc) {
        throw new Error('Not found');
    }
    return doc.delete();
}