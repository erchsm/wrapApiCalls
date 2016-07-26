var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var collection_id = 'e8260bf2-487f-4b42-bc7c-8afc0fbff3b0';

var deleteOptions = {
  method: 'DELETE',
  uri: 'https://api.wrap.co/api/card_collections/' + collection_id,
  headers: {
    'Authorization': 'Bearer ' + API_KEY,
    'Content-Type': 'application/json'
  },
  json: true
};

rp(deleteOptions)
  .then(function(res) {
    console.log(res);  
  });

