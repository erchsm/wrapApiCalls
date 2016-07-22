var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var wrap_id = '5edd1161-6464-480c-8c1a-80babbfe901b';
var phone_number = '4155890053';

var shareOptions = {
  method: 'POST',
  url: 'https://api.wrap.co/api/wraps/' + wrap_id + '/share',
  headers: {
    'Authorization': 'Bearer ' + API_KEY,
    'Content-Type': 'application/json'
  },
  qs: {
    type: 'sms',
    phone_number: phone_number
  }
}

rp(shareOptions)
  .then(function() {
    console.log('shared'); 
  });