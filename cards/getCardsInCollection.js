var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var card_collection_id = 'b90b98f1-b84b-4766-bf37-24bb798bd454';

var getOptions = {
  method: 'GET',
  uri: 'https://api.wrap.co/api/cards/collections/search',
  headers: {
    'Authorization': 'Bearer ' + API_KEY,
    'Content-Type': 'application/json'
  },
  qs: {
    card_collection_ids: card_collection_id
  },
  json: true
};

rp(getOptions)
  .then(function(res) {
    console.log(res);  
  });
