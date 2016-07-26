angular.module('FormController', []).controller('FormController', ($scope, Collection, Wrap) => {
  
  Collection.getCardsInCollection.then(cards => {
    $scope.topics = cards;
  });

  $scope.toggleSelection = topicSelection => {
    Wrap.toggleTopicSelection(topicSelection);
  };

});



