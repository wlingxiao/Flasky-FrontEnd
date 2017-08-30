import viewDailyTpl from './view-news.tpl.html'
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'

export default function (dailyService, $log, $sce) {
    return {
        restrict: 'E',
        template: viewDailyTpl,
        scope: {
            newsId: '@newsId'
        },
        link: function (scope, element) {
            var socket = new SockJS('/api/v1/daily');
            const stompClient = Stomp.over(socket);
            stompClient.connect({}, function (frame) {
                console.log('Connected: ' + frame);
                stompClient.subscribe('/topic/daily/news', function (greeting) {
                    $log.info(JSON.parse(greeting.body).content);
                    scope.$apply(function () {
                        scope.body = $sce.trustAsHtml(JSON.parse(greeting.body).body)
                    })
                });
            });

            dailyService.getNewsById(scope.newsId).then(function (response) {
                scope.body = $sce.trustAsHtml(response['data']['body'])
            });
        }
    }
}