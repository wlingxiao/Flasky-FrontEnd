import augular from 'angular'

import homeDirective from './home.directive'
import postsService from './posts.service'

import './home.css'

export default augular.module('home', [])
    .directive('home', homeDirective)
    .service('postsService', postsService);