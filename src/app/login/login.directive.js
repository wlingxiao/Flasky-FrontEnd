import loginTpl from './login.tpl.html';

export default function () {
    return {
        restrict: 'E',
        scope: {},
        template: loginTpl,
        controller: function ($scope) {
        }
    }
}