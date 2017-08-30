import indexTpl from './home.tpl.html'

export default function ($http, postsService, $log) {
    return {
        restrict: 'E',
        template: indexTpl,
        scope: {},
        link: function (scope, element) {
            postsService.listPosts().then(function (response) {
                if (response['status'] === 200) {
                    const responseData = response['data'];
                    scope.totalItems = responseData['size'];
                    scope.currentPage = 1;
                    scope.maxSize = 5;
                    scope.posts = transformPosts(responseData['data']);
                }
            })['catch'](function (error) {
                $log.error(error)
            })
        }
    }
}

function transformPosts(rawPosts) {
    const posts = [];
    rawPosts.map(function (post) {
        posts.push({
            id: post['id'],
            title: post['title'],
            summary: post['summary'],
            createTime: post['create_time'],
            image: post['image']

        })
    });
    return posts;
}