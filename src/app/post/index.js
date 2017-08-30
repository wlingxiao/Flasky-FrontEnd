import augular from 'angular'
import commentToUserDirective from './commentToUser.directive'
import viewPostDirective from './viewPost.directive'
import createPostDirective from './createPost.directive'
import postService from './posts.service'
import commentsService from './comments.service'

import './createpost.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
export default augular.module('post', [])
    .directive('viewPost', viewPostDirective)
    .directive('createPost', createPostDirective)
    .service('postService', postService)
    .service('commentsService', commentsService);