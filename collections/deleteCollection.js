var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var collection_id = 'b0d62c07-813b-4115-8bbd-8a4391112de8';

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

