import viewUserTpl from './view-user.tpl.html'
import $ from 'jquery'
import bootstrap from 'bootstrap'

global.jQuery = $

export default function (usersService) {
    return {
        replace: true,
        restrict: 'E',
        template: viewUserTpl,
        link: function (scope, element) {

        }
    }
}