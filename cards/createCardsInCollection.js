var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var collection_id = 'b90b98f1-b84b-4766-bf37-24bb798bd454';
var card_id = '9cce12d7-7329-4e8e-a564-4371d73aa7ef';
var card_name = 'SAMSUNG GALAXY 6';
var data_label = 'SAMSUNG GALAXY 6';

var createOptions = {
  method: 'POST',
  uri: 'https://api.wrap.co/api/cards/' + card_id + '/clone',
  headers: {
    'Authorization': 'Bearer ' + API_KEY,
    'Content-Type': 'application/json'
  },
  body: {
    collection_id: collection_id,
    data: {
      card_name: card_name, 
      data_label: data_label
    },
    mapping: {
      card_name: card_name, 
      'token label': data_label
    },
  },
  json: true
};

rp(createOptions)
  .then(function(res) {
    console.log(res);  
  });

