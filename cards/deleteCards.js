var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var card_ids = '1ed2d32c-419d-40c9-8ca7-766385da7cb9,428b1eba-4640-489f-aa42-a62a0d47703d,c3c98431-023e-48fb-b519-c706b6f08979';

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

