var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var card_collection_id = '';

var getOptions = {
  method: 'GET',
  uri: 'https://api.wrap.co/api/cards/collections/search',
  headers: {
    'Authorization': 'Bearer ' + API_KEY,
    'Content-Type': 'application/json'
  },
  qs: {
    card_collection_ids: card_collection_id,
    per_page: 100
  },
  json: true
};

rp(getOptions)
  .then(function(res) {
    res.forEach(function(r) {
      console.log(r.name);  
    })
  });

