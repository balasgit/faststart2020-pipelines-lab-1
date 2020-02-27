var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SW Brownbag Session 2020 Feb' });
});

module.exports = router;
