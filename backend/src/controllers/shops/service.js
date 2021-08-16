const Shop = require('../../models/shop.model');

exports.create = shopData => {
    const shop = new Shop(shopData);
    return shop.save();
};

exports.findAll = () => Shop.find().populate();

exports.findOne = id => Shop.findById(id).populate();

exports.update = (id, updateData) => Shop.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = async id => {

    const doc = await Shop.findByIdAndRemove(id);

    if (!doc) {
        throw new Error('Not found');
    }
    return doc.delete();
}