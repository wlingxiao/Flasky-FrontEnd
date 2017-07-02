import angular from 'angular';
import '@uirouter/angularjs'

import 'bootstrap/dist/css/bootstrap.min.css'

const app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
});