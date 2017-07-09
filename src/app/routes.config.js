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

    $stateProvider.state(homeState);
    $stateProvider.state(loginState);
    $stateProvider.state(signUpState);
    $stateProvider.state(userState);
}