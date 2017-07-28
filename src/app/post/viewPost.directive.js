import postTpl from './view-post.tpl.html'

export default function () {
    return {
        replace: true,
        restrict: 'E',
        scope: {
            postId: '@postId'
        },
        template: postTpl,
        link: function (scope, element) {
            var a = scope.postId
        }
    }
}