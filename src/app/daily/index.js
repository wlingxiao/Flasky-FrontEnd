import augular from 'angular'

import viewDailyDirective from './viewDaily.directive'
import dailyService from './daily.service'
import './news.css'
export default augular.module('daily', [])
    .directive('viewNews', viewDailyDirective)
    .service('dailyService', dailyService);