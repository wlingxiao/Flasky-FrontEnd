import angular from 'angular';
import '@uirouter/angularjs'

import indexDirective from './index/index.directive'

import 'bootstrap/dist/css/bootstrap.min.css'

const app = angular.module('app', ['ui.router']);

app.directive('index', indexDirective);

app.config(function ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    const indexState = {
        name: 'index',
        url: '/',
        template: '<index></index>'
    };

    $stateProvider.state(indexState);
});