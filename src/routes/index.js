var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SW Brownbag Session CI CD 2020 - 28th Feb Friday ' });
});

module.exports = router;
