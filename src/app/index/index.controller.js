export default function ($scope, $http) {
    $http.get('/post/load_all_posts').then(function (response) {
        const data = response['data'];
        if (data && data['code'] === 200) {
            const posts = [];
            const postsData = data['data'];
            for (let i = 0; i < postsData.length; i++) {
                posts.push({
                    id: postsData[i]['id'],
                    title: postsData[i]['title'],
                    content: postsData[i]['content'],
                    createTime: postsData[i]['create_time']
                })
            }
            $scope.posts = posts;
        }

    })['catch'](function (error) {

    })
}