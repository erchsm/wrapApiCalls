var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var cards = [
  {
    id: '',
    name: ''.toUpperCase()
  },
];

cards.forEach(function(card, i) {
  (function(i) {
    var collection_id = '';
    var card_id =  card.id;
    var card_name = card.name;
    var data_label = card.name;
    
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
          card_name: 'card_name', 
          'token label': 'data_label'
        },
      },
      json: true
    };

    rp(createOptions)
      .then(function(res) {
        console.log('created card ' + (i+1));  
      });
    
  })(i);
});


