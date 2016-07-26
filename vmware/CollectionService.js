angular.module('CollectionService', []).factory('Collection', ['$http', ($http) => {
    
  getCardsInCollection: () => {

    const cardCollectionId = '38ada967-5ea8-4703-a28d-c0fb4f236d68';

    const getOptions = {
      method: 'GET',
      uri: `https://api.wrap.co/api/cards/collections/search?card_collection_ids=${cardCollectionId}`,
      headers: {
        Authorization: `Bearer  ${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      }
    };

    $http(getOptions)
      .then(cards => cards)
      .catch(err => {
        console.log(err.message);
      });
  }

}]);