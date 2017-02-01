const reqwest = require('reqwest');
var express = require('express');
var router = express.Router();

const config = require('../misc/config');

router.get('/tesco/:query', function(req, res, next) {
  const query = req.params.query;

  reqwest({
    url:  `${config.tescoProductSearchAPI}?query=${query}&offset=0&limit=10`,
    method: 'get',
    headers: {
      'Ocp-Apim-Subscription-Key': config.tescoApiHeaderKey
    }
  }).then((response) => {
    res.send(response);
  });
});

module.exports = router;
