import $ from 'jquery'
import userManagerTpl from './user-manager.tpl.html'

export default function () {
    return {
        restrict: 'E',
        scope: {},
        template: userManagerTpl,
        link: function (scope, element) {

        }
    }
}
