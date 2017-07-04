import indexTpl from './index.tpl.html'
import indexController from './index.controller'

export default function () {
    return {
        restrict: 'E',
        template: indexTpl,
        scope: true,
        controller: indexController,
        link: function (scope, element) {

        }
    }
}