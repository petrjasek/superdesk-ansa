define([
    'angular',
    'angular-route',
    'bootstrap/dropdown',
    './controllers/list',
    './controllers/edit',
    './controllers/ref',
    './resources',
    './directives'
], function(angular) {
    'use strict';

    angular.module('superdesk.items', ['ngRoute', 'superdesk.items.resources', 'superdesk.items.directives']).
        config(function($routeProvider) {
            $routeProvider.
                when('/items/:guid', {
                    templateUrl: 'scripts/superdesk/items/views/edit.html',
                    controller: require('superdesk/items/controllers/edit'),
                    resolve: {
                        item: function(ItemLoader) {
                            return ItemLoader();
                        }
                    }
                }).
                when('/', {
                    controller: require('superdesk/items/controllers/list'),
                    templateUrl: 'scripts/superdesk/items/views/list.html'
                });

        }).
        run(function($rootScope) {
            $rootScope.mode = {
                zen: false
            };
        }).
        controller('RefController', require('superdesk/items/controllers/ref'));
});
