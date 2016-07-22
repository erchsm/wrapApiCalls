var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var card_ids = '0905d37b-55dc-4fdd-910f-31c6a94dabdd,ee5342b2-8771-4faa-b9b2-cbdb76d282e0,2030f257-4664-4963-bdf9-02efdce27f24,27e93f83-96d3-4d93-9b6a-b3f8facb90e7,66a0479b-934e-44e0-aa3b-665364bc9840,704cbb4d-8f94-4f96-a523-a06698a9a40a';

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

