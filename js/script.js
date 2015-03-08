$(function () {
    $('.form__select').fancySelect();
    $('.page').addClass('blurred');
});



var popupApp = angular.module('popupApp', []);

popupApp.factory('Shared', function() {

    var form = {
        name: '',
        surname: '',
        email: '',
        phone: '+7',
        valid: false
    }

    var captions = [{
        title: 'Хорошее время для знакомства',
        desc: 'Заполните информацию о себе, и нажмите кнопку «Продолжить»'
    },{
        title: ', рады знакомству!',
        desc: 'Заполните информацию о себе, и нажмите кнопку «Продолжить». Если вы частное лицо, пропустите этот шаг.',
        name: ''
    }];

    return {
        getProperty: function(prop) {
            return form[prop];
        },
        setProperty: function(prop, state) {
            form[prop] = state;
        },
        getAll: function() {
            return form;
        },
        setAll: function(obj) {
            angular.forEach(obj, function(val, key) {
                form[key] = val;
            });
        },
        getCaption: function(index) {
            return captions[index];
        }
    }
});

popupApp.controller('validationController', function($scope, Shared) {
    $scope.user = {phone: '+7'};

    $scope.submitForm = function() {
        if ($scope.userForm.$valid) {
            Shared.setProperty('valid', true);
            Shared.setAll($scope.user);
        }
    };
});

popupApp.controller('captionController', function($scope, Shared) {
    $scope.current = Shared.getCaption(0);
    $scope.form = Shared.getAll();
    $scope.$watch(
        'form',
        function (newValue, oldValue) {
            console.log(newValue);
            if (newValue !== oldValue) {
                $scope.current = Shared.getCaption(1);
            }
        },
        true);
});
