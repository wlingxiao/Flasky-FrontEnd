import augular from 'angular'
import viewUserDirective from './viewUser.directive'
import userManagerDirective from './userManager.directive'

export default augular.module('user', [])
    .directive('viewUser', viewUserDirective)
    .directive('userManager', userManagerDirective)