import augular from 'angular'
import commentToUserDirective from './commentToUser.directive'
import postDirective from './viewPost.directive'
import postService from './posts.service'
import commentsService from './comments.service'

export default augular.module('post', [])
    .directive('viewPost', postDirective)
    .service('postService', postService)
    .service('commentsService', commentsService);