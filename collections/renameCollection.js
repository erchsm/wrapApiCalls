var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var collection_id = '';
var collection_name = '';

var createOptions = {
  method: 'PUT',
  uri: 'https://api.wrap.co/api/card_collections/' + collection_id,
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

