const reqwest = require('reqwest');
var express = require('express');
var router = express.Router();

const config = require('../misc/config');

/* GET home page. */
router.get('/:barcode', function(req, res, next) {
  const barcode = req.params.barcode;

  reqwest({
    url:  `${config.foodSearchAPI}?upc=${barcode}`,
    method: 'get',
    headers: {
      'X-Mashape-Key': config.apiHeaderKey
    }
  }).then((response) => {
    res.send(response);
  });
});

module.exports = router;
