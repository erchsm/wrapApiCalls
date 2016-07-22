var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var wrap_id = 'ad7337e5-fbd9-4159-b592-39ae34f94516';

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

