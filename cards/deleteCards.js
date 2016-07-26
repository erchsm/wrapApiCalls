var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var card_ids = 'dc829c33-54fb-45ec-881c-32e4c2344eb2';

var deleteOptions = {
  method: 'DELETE',
  uri: 'https://api.wrap.co/api/cards',
  headers: {
    'Authorization': 'Bearer ' + API_KEY,
    'Content-Type': 'application/json'
  },
  body: {
    card_ids: card_ids
  },
  json: true
};

rp(deleteOptions)
  .then(function(res) {
    console.log(res);  
  });

