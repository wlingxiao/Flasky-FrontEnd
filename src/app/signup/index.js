import augular from 'angular'
import signupDirective from './signup.directive'
import {validateUsernameExist, validateEmailExist, hasSuccessOrError} from './validation.directive'

export default angular.module('signup', [])
    .directive('signUp', signupDirective)
    .filter('validateUsernameExist', validateUsernameExist)
    .filter('validateEmailExist', validateEmailExist)
    .filter('hasSuccessOrError', hasSuccessOrError);