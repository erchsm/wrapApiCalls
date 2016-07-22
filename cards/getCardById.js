var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var card_id = '65a04368-bc6d-4b59-9070-9d84294a68b3';

var getOptions = {
  method: 'GET',
  uri: 'https://api.wrap.co/api/cards/' + card_id,
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

