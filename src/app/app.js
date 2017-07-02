import angular from 'angular';
import '@uirouter/angularjs'

import indexDirective from './index/index.directive'
import loginDirective from './login/login.directive'

import 'bootstrap/dist/css/bootstrap.min.css'

const app = angular.module('app', ['ui.router']);

app.directive('index', indexDirective);
app.directive('login', loginDirective);

app.config(function ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    const indexState = {
        name: 'index',
        url: '/',
        template: '<index></index>'
    };

    const loginState = {
        name: 'login',
        url: '/login',
        template: '<login></login>'
    };

    $stateProvider.state(indexState);
    $stateProvider.state(loginState);
});