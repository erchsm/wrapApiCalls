var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var getOptions = {
  method: 'GET',
  uri: 'https://api.wrap.co/api/wraps',
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

