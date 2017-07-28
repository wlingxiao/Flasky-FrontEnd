import userManagerTpl from './user-manager.tpl.html'
import {initDatePicker, clearDateRanger} from './datepicker'

export default function (usersService, $log) {
    return {
        restrict: 'E',
        scope: {},
        template: userManagerTpl,
        link: function (scope, element) {
            initDatePicker()

            usersService.listUsers({}).then(function (response) {
                if (response['status'] === 200) {
                    transformUsers(response, scope)
                }
            })['catch'](function (response) {
                $log.error(response)
            });
        }
    }
}


function transformUsers(response, $scope) {
    const data = response['data'];
    $scope.totalItems = data['size'];
    const responseUsers = data['data'];
    $scope.totalPage = parseInt($scope.totalItems / 10) + 1;
    const users = [];
    for (let i = 0; i < responseUsers.length; i++) {
        const item = responseUsers[i];
        users.push({
            id: item['id'],
            username: item['username'],
            email: item['email'],
            signUpTime: item['sign_up_time'],
            lastVisitTime: item['last_visit_time']
        })
    }

    $scope.users = users;
}