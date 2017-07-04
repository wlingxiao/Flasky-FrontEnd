import signUp from './signup.tpl.html'

export default function () {
    return {
        restrict: 'E',
        scope: {},
        template: signUp,
        controller: function ($scope, $filter) {
            var a = 100;
        }
    }
}