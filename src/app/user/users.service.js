export default function ($http, $httpParamSerializerJQLike) {
    this.listUsers = function (filter) {
        const usersUrl = '/users';
        return $http.get(usersUrl, {
            params: $httpParamSerializerJQLike(filter)
        })
    }
}