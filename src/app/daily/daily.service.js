export default function ($http, $httpParamSerializerJQLike) {

    const dailyNews = '/dailies/news';

    this.getNewsById = function (newsId) {
        return $http.get(dailyNews + '/' + newsId)
    };

}