var express = require('express');
var router = express.Router();
const get = require('../controller/get.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  get.fromDB((err, data) => {
    if (err) throw err;
    console.log(`Retrieved from MongoDB: ${JSON.stringify(data)}`);
    res.render('index', {
      title: '晴雨表 | Kiyoshi\'s Room',
      subtitle: 'Kiyoshi\'s Room',
      temperature: data.Temperature,
      humidity: data.Humidity
    });
  })
});

module.exports = router;