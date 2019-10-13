const DataModel = require('../models/datamodel.js');

const fromDB = function (callback) {
    DataModel.findOne({}, {}, {
        sort: {
            _id: -1
        }
    }, function (err, data) {
        if (typeof callback == 'function') callback(err, data);
    });
}

module.exports = {
    fromDB: fromDB
};