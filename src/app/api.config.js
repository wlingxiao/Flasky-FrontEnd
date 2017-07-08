// api interceptor
import _ from 'lodash'

export default function ($httpProvider) {
    $httpProvider.interceptors.push(function ($q) {
        return {
            'request': function (config) {
                if (!_.endsWith(config.url, '.html')) {
                    config.url = '/api/v1' + config.url;
                }

                return config || $q.when(config);
            }
        }
    })
}