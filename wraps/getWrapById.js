var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var wrap_id = '5692cd32-09b6-4df1-b21d-a49288892cd2';

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

