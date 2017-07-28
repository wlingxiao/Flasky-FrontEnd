import augular from 'angular'
import commentToUserDirective from './commentToUser.directive'
import postDirective from './viewPost.directive'

export default augular.module('post', [])
    .directive('viewPost', postDirective)