var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var collection_id = 'cb1f2f43-33dd-4587-bcec-7a6de31c9cd6';
var collection_name = 'individual_contact';

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

