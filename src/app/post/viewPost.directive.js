import postTpl from './view-post.tpl.html'

export default function (postService, commentsService, $log) {
    return {
        replace: true,
        restrict: 'E',
        scope: {
            postId: '@postId'
        },
        template: postTpl,
        link: function (scope, element) {
            postService.loadPosts(scope.postId).then(function (response) {
                if (response['status'] === 200) {
                    const posts = response['data'];
                    const postBody = {};
                    postBody['id'] = posts['id'];
                    postBody['title'] = posts['title'];
                    postBody['content'] = posts['content'];
                    postBody['create_time'] = posts['create_time'];
                    postBody['user_id'] = posts['user_id'];
                    scope.postBody = postBody;
                    return commentsService.loadComments(scope.postId)
                }
            }).then(function (response) {
                if (response['status'] === 200) {
                    const comments = [];
                    const commentData = response['data'];
                    for (let index = 0; index < commentData.length; index++) {
                        comments.push({
                            'id': commentData[index]['id'],
                            'content': commentData[index]['content'],
                            'createDate': commentData[index]['create_date'],
                            'fromUserId': commentData[index]['from_user_id'],
                            'fromUserName': commentData[index]['from_user_name'],
                            'toUserId': commentData[index]['to_user_id'],
                            'toUserName': commentData[index]['to_user_name'],
                            'toCommentId': commentData[index]['to_comment_id'],
                            'toCommentContent': commentData[index]['to_comment_content'],
                            'toCommentCreateTime': commentData[index]['to_comment_create_time'],
                            'postId': commentData[index]['post_id']
                        })
                    }
                    scope.comments = comments;
                }
            })['catch'](function (response) {
                $log.error(response)
            });
        }
    }
}