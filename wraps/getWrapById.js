var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var wrap_id = '79040607-3c14-40df-a740-68203a3a3190';

var getOptions = {
  method: 'GET',
  uri: 'https://api.wrap.co/api/wraps/' + wrap_id,
  headers: {
    'Authorization': 'Bearer ' + API_KEY,
    'Content-Type': 'application/json'
  },
  json: true
};

rp(getOptions)
  .then(function(res) {
    console.log(res);  
  });

