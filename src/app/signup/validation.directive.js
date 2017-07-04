const validateUsernameExist = function ($http, $q) {
    return {
        require: 'ngModel',
        link: function (scope, element, attributes, ngModel) {
            ngModel.$asyncValidators.validateUsernameExist = function (modleValue, viewValue) {
                var validateUsernameUrl = '/auth/validate_username/';

                return $http({
                    method: 'POST',
                    url: validateUsernameUrl + modleValue
                }).then(function (response) {
                    if (response.data['code'] === 200) {
                        return true;
                    } else {
                        return $q.reject(response['msg']);
                    }
                })['catch'](function (response) {
                    return $q.reject('请求错误')
                });
            }
        }
    }
}

const validateEmailExist = function ($http, $q) {
    return {
        require: 'ngModel',
        link: function (scope, element, attributes, ngModel) {
            ngModel.$asyncValidators.validateEmailExist = function (modelValue, viewValue) {
                var validateEmailUrl = '/auth/validate_email/';

                return $http({
                    method: 'POST',
                    url: validateEmailUrl + modelValue
                }).then(function (response) {
                    if (response.data['code'] === 200) {
                        return true
                    } else {
                        return $q.reject(response['msg'])
                    }
                })['catch'](function (response) {
                    return $q.reject('请求错误');
                })
            }
        }
    }
};

export {validateUsernameExist, validateEmailExist}