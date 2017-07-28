import augular from 'angular'
import 'angular-ui-bootstrap'
import viewUserDirective from './viewUser.directive'
import userManagerDirective from './userManager.directive'
import usersService from './users.service'

export default augular.module('user', ['ui.bootstrap'])
    .directive('viewUser', viewUserDirective)
    .directive('userManager', userManagerDirective)
    .service('usersService', usersService);