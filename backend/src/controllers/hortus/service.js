const Hortus = require('../../models/hortus.model');

exports.create = hortusData => {
    const hortus = new Hortus(hortusData);
    return hortus.save();
};

exports.findAll = () => Hortus.find().populate();

exports.findOne = id => Hortus.findById(id).populate();

exports.update = (id, updateData) => Hortus.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = async id => {

    const doc = await Hortus.findByIdAndRemove(id);

    if (!doc) {
        throw new Error('Not found');
    }
    return doc.delete();
}