import viewUserTpl from './view-user.tpl.html'

export default function () {
    return {
        replace: true,
        restrict: 'E',
        template: viewUserTpl,
        link: function (scope, element) {
            var a = 10
        }
    }
}