var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var card_id = '49368f0f-f46f-43bf-931b-e591ef30ec75';

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

