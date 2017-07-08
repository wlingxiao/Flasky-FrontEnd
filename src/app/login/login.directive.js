import loginTpl from './login.tpl.html';

export default function () {
    return {
        restrict: 'E',
        scope: {},
        template: loginTpl,
        link: function (scope, element) {
        },
    }
}