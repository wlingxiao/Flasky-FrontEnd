import angular from 'angular';
import '@uirouter/angularjs'
import 'angular-messages'

import indexDirective from './index/index.directive'
import loginDirective from './login/login.directive'
import signUpDirective from './signup/signup.directive'
import hasSuccessOrError from './signup/signup.filter'

import a from './signup/validation.directive'

import 'bootstrap/dist/css/bootstrap.min.css'

const app = angular.module('app', ['ui.router', 'ngMessages']);

app.filter('hasSuccessOrError', hasSuccessOrError);
app.directive('index', indexDirective);
app.directive('login', loginDirective);
app.directive('signUp', signUpDirective);
app.directive('validateUsernameExist', a.validateUsernameExist);
app.directive('validateEmailExist', a.validateEmailExist);

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

    const signUpState = {
        name: 'signUp',
        url: '/sign_up',
        template: '<sign-up></sign-up>'
    };

    $stateProvider.state(indexState);
    $stateProvider.state(loginState);
    $stateProvider.state(signUpState);
});