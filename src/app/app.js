import angular from 'angular';
import '@uirouter/angularjs'

import 'bootstrap/dist/css/bootstrap.min.css'

import apiConfig from './api.config'
import routesConfig from './routes.config'

import './home'
import './login'
import './signup'

const app = angular.module('app', ['ui.router', 'home', 'login', 'signup']);

app.config(apiConfig);
app.config(routesConfig);