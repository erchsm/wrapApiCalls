var rp = require('request-promise');
var API_KEY = require('../config').API_KEY;

var topics = require('./topics').topics;
var draft_wrap_id = '8c33452c-dd96-46c2-a611-78881d297a76';
var customer_name = 'Leran';
var customer_rep_name = 'Ivan';
var customer_rep_image = 'http://www.resumeok.com/wp-content/uploads/2012/11/customer-service-representative-job-interview.jpg';
var customer_rep_number = 'tel:' + '415-589-0053';

var firstThree = [
  { id: 'acfb50c9-6126-445f-997b-8189bda11a0d', data: { name: customer_name } },
  { id: '3d2bdebc-261a-4d53-9d0b-41abc853fcbc', data: { '': '' } },
  { id: '7a3f8892-6c7a-4845-9dd6-1c95cd7cda2d', data: {'': ''} }
];

var selections = [topics[3], topics[2], topics[4]].map(function(selection) {
  return { id: selection.id, data: {'': ''} }
});

var lastTwo = [
  {
    id: '585c71a2-5095-4926-9a6a-b539ffbe96fc',
    data: {
      name: customer_rep_name,
      image: customer_rep_image,
      number: customer_rep_number
    }
  },
  { id: '82e488e0-8222-4caa-a10d-ebc44b1a0652', data: {'': ''} }
];

var personalized_json = firstThree.concat(selections).concat(lastTwo);

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

