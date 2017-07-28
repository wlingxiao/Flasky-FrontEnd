export default function ($http, $httpParamSerializerJQLike) {
    const postUrl = "/posts/";
    this.loadPosts = function (postId) {
        if (postId) {
            return $http.get(postUrl + postId);
        } else {
            return $http.get(postUrl);
        }
    }
}