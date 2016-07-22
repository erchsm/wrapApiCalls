var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var getOptions = {
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

rp(getOptions)
  .then(function(res) {
    var interestedCollections = res.filter(function(collection) {
      return collection.name === 'topics';
    });
    console.log(interestedCollections);
  });

