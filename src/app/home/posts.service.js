export default function ($http, $httpParamSerializerJQLike) {

    const postUrl = '/dailies';

    this.listPosts = function (offset, limit) {
        if (!limit) {
            limit = 10;
        }
        return $http.get(postUrl);
    };

    this.getPostById = function (postId) {
        return $http.get(postUrl + '/' + postId)
    };

    this.createPost = function (post) {
        return $http.post(postUrl, $httpParamSerializerJQLike(post), {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    };

    this.updatePost = function (post) {
        return $http.put(postUrl, $httpParamSerializerJQLike(post), {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    };

    this.removePostById = function (postId) {
        return $http.delete(postUrl + '/' + postId)
    }
}