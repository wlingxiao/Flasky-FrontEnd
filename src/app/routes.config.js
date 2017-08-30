export default function ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    const homeState = {
        name: 'home',
        url: '/',
        template: '<home></home>'
    };

    const signUpState = {
        name: 'signUp',
        url: '/sign_up',
        template: '<sign-up></sign-up>'
    };

    const loginState = {
        name: 'login',
        url: '/login',
        template: '<login></login>'
    };

    const userState = {
        name: 'viewUser',
        url: '/view_user',
        template: '<user-manager></user-manager>'
    };

    const postState = {
        name: 'post',
        url: '/post/:postId',
        template: '<view-post post-id="{{ postId }}"></view-post>',
        controller: function ($scope, $stateParams) {
            $scope.postId = $stateParams.postId
        }
    };

    const createPostState = {
        name: 'createPost',
        url: '/create_post',
        template: '<create-post></create-post>'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(loginState);
    $stateProvider.state(signUpState);
    $stateProvider.state(userState);
    $stateProvider.state(postState);
    $stateProvider.state(createPostState);
}