import indexTpl from './home.tpl.html'

export default function ($http, postsService) {
    return {
        restrict: 'E',
        template: indexTpl,
        scope: {},
        link: function (scope, element) {
            postsService.listPosts().then(function (response) {
                if (response['status'] === 200) {
                    scope.posts = transformPosts(response['data']['posts']);
                }
            })['catch'](function (error) {

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
            content: post['content'],
            createTime: post['create_time']
        })
    });
    return posts;
}