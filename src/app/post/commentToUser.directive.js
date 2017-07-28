import commnetToUserTpl from './comment-to-user.tpl.html'

export default function () {
    return function () {
        return {
            replace: true,
            scope: false,
            restrict: 'E',
            template: commnetToUserTpl,
            link: function (scope, element) {

            }
        }
    }
}