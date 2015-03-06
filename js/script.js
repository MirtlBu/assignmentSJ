$(function () {
    console.log('init');
    $('.form__select').fancySelect();
    $('.page').addClass('blurred');
});

var validationApp = angular.module('validationApp', []);

validationApp.controller('mainController', function($scope) {
    $scope.submitForm = function() {
        if ($scope.userForm.$valid) {
            alert('it works!');
        }
    };
});