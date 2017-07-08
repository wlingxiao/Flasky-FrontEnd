import augular from 'angular'
import 'angular-messages'
import loginDirective from './login.directive'

export default angular.module('login', ['ngMessages'])
    .directive('login', loginDirective)