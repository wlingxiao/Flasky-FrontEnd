export default function ($http, $httpParamSerializerJQLike) {
    const postUrl = "/comments";
    this.loadComments = function (postId) {
        if (postId) {
            return $http.get(postUrl + "?postId=" + postId);
        } else {
            return $http.get(postUrl);
        }
    }
}