var rp = require('request-promise');
var API_KEY = require('./config').API_KEY;

collectionCreationOptions = {
  method: 'GET',
  uri: 'https://api.wrap.co/api/card_collections',
  headers: {
    'Authorization': 'Bearer ' + API_KEY,
    'Content-Type': 'application/json'
  },
  body: {
    name: 'continueConversationPages'
  },
  json: true
};

rp(collectionCreationOptions)
  .then(function(res) {
    console.log(res);  
  });

