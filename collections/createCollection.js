var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var collection_name = 'topics';

var createOptions = {
  method: 'POST',
  uri: 'https://api.wrap.co/api/card_collections',
  headers: {
    'Authorization': 'Bearer ' + API_KEY,
    'Content-Type': 'application/json'
  },
  body: {
    name: collection_name
  },
  json: true
};

rp(createOptions)
  .then(function(res) {
    console.log(res);  
  });

