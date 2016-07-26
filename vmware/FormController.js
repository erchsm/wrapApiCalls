angular.module('FormController', []).controller('FormController', ($scope, Collection, Wrap) => {
  
  const formData = {
    firstName: $scope.fullName.split(' ')[0],
    lastName: $scope.fullName.split(' ')[1],
    company: $scope.company,
    industry: $scope.industry,
    phoneNumber: $scope.phoneNumber,
    email: $scope.email,
    notes: $scope.notes
  };

  $scope.updateForm = () => {
    Wrap.updateFormData(formData);
  };

});