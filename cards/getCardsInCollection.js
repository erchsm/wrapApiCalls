var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var card_collection_id = 'bbe24862-14d2-4dc1-ab7c-eaed4186f320';

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
    console.log(res.length);  
  });

