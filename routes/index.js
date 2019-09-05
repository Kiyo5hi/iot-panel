var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const DataModel = require('../models/datamodel.js');
const config = require('../config/.config.json');
const url = config.database;
mongoose.connect(url, { useNewUrlParser: true });

/* GET home page. */
router.get('/', function (req, res, next) {
  DataModel.findOne({}, {}, { sort: { _id: -1 } }, function (err, data) {
    res.render('index',
      {
        title: 'Kiyoshi\'s Room',
        temperature: data.Temperature,
        humidity: data.Humidity
      }
    );
  });
});

module.exports = router;
