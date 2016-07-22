var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var draft_wrap_id = '79040607-3c14-40df-a740-68203a3a3190';
var personalized_json = [
  {
    id: '5eeb87e9-e802-4507-8c20-f43de0d408c8',
    data: {'': ''}
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

