var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var draft_wrap_id = '9b9d1af9-f102-4e21-b4ab-c5dc9aab4cbf';
var personalized_json = [
  {
    id: 'a5bfbac3-6d60-4d12-8565-8a335ac9fd94',
    data: {name: 'Leran'}
  }
];

var createOptions = {
  method: 'POST',
  uri: 'https://api.wrap.co/api/wraps/' + draft_wrap_id + '/personalize/v2',
  headers: {
    'Authorization': 'Bearer ' + API_KEY,
    'Content-Type': 'application/json'
  },
  body: {
    personalized_json: personalized_json
  },
  json: true
};

rp(createOptions)
  .then(function(res) {
    console.log(res);  
  })
  .catch(function(err) {
    console.log(err.message);
  });

