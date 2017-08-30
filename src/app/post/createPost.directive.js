import createPostTpl from './create-post.tpl.html'
import Quill from 'quill'

export default function (postService) {
    return {
        replace: true,
        restrict: 'E',
        template: createPostTpl,
        link: function (scope, element) {
            const toolbarOptions = [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],
                [{'header': 1}, {'header': 2}],               // custom button values
                [{'list': 'ordered'}, {'list': 'bullet'}],
                [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
                [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                [{'direction': 'rtl'}],                         // text direction
                [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
                [{'header': [1, 2, 3, 4, 5, 6, false]}],
                [{'color': []}, {'background': []}],          // dropdown with defaults from theme
                [{'font': []}],
                [{'align': []}],
                ['image'],
                ['clean']                                         // remove formatting button
            ];

            const editor = new Quill('.create-post-content', {
                modules: {
                    toolbar: toolbarOptions
                },
                placeholder: '请输入内容',
                theme: 'snow',
                height: 500
            })
        }
    }
}