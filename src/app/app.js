import angular from 'angular';
import '@uirouter/angularjs'

import 'bootstrap/dist/css/bootstrap.min.css'

import apiConfig from './api.config'
import routesConfig from './routes.config'

import './home'
import './login'
import './signup'
import './user'

const app = angular.module('app', ['ui.router', 'home', 'login', 'signup', 'user']);

app.config(apiConfig);
app.config(routesConfig);