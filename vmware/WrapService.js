angular.module('WrapService', []).factory('Wrap', ['$http', ($http) => {
  
  createPersonalizedWrapWithSelections: personalizationData => {
  
    const firstThree = [
      { id: 'acfb50c9-6126-445f-997b-8189bda11a0d', data: { name: personalizationData.customerName } },
      { id: '3d2bdebc-261a-4d53-9d0b-41abc853fcbc', data: { '': '' } },
      { id: '7a3f8892-6c7a-4845-9dd6-1c95cd7cda2d', data: { '': '' } }
    ];

    const selections = personalizationData.topicSelections.map(topicSelection =>
      { id: topicSelection.id, data: {'': ''} }
    );

    const lastTwo = [
      {
        id: '585c71a2-5095-4926-9a6a-b539ffbe96fc',
        data: {
          name: personalizationData.customerRepName,
          image: personalizationData.customerRepImage,
          number: personalizationData.customerRepNumber
        }
      },
      { id: '82e488e0-8222-4caa-a10d-ebc44b1a0652', data: { '': '' } }
    ];

    const personalized_json = firstThree.concat(selections).concat(lastTwo);

    const createOptions = {
      method: 'POST',
      url: `https://api.wrap.co/api/wraps/${personalizationData.draftWrapId}/personalize/v2`,
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      },
      data: { personalized_json: personalized_json }
    };

    $http(createOptions)
      .then(wrap => wrap)  
      .catch(err => {
        console.log(err.message);
      });
  },

  shareWrapViaSMS: (wrapId, phoneNumber) => {

    const shareOptions = {
      method: 'POST',
      url: `https://api.wrap.co/api/wraps/${wrapId}/share?type=sms&phone_number=${phoneNumber}`,
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      }
    }

    $http(shareOptions)
      .then(() => 'shared succesfully')  
      .catch(err => {
        console.log(err.message);
      });    
  },

  //TODO
  shareWrapViaEmail: (wrapId, email) => {}

}]);