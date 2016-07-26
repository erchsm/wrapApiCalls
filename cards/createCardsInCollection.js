var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var cards = [
  {
    id: 'd7064d44-907b-4121-a1c9-cb2be8a756e1',
    name: 'thank you'.toUpperCase()
  },
  {
    id: '51ca4fea-1faa-4dbe-9037-4fc4eb084b2f',
    name: 'confirmation'.toUpperCase()
  },
];

cards.forEach(function(card, i) {
  (function(i) {
    var collection_id = '0cfec9f6-ae9f-470e-882c-04da02a81f83';
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


