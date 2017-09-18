
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.YTSearch = require('youtube-api-search');

window.Vue = require('vue');

require('sweetalert');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

// const app = new Vue({
//     el: '#app'
// });

const YOUTUBE_API_KEY = 'AIzaSyCue6uy1WzHxnmwFpQj7YAWEB9MGxe5Tv4';

window.utils = {

    spinner: function(text, title) {

        // if(!title) {
        //     var title = '<i class="fa fa-gear fa-5x fa-spin"></i>';
        // }
        if(!text) {
            var text = 'Working. Hangon...';
        }

        swal({
            text: text,
            buttons: false
        });
    },

    trunc: function(text, length) {
        var length = length || 15;
        if(text.length > length) {
            return text.substr(0, length) + "..."
        }
        return text;
    },

    handle422Error: function(errors, title) {

            if(!title) {
                var title = 'There was a problem';
            }

            var text = '';

            $.each(errors, function(i, v) {
                text += '<p class="text-danger">' + v[0] + '</p>';
            });

            swal({
                title: title,
                text: text,
                type: 'error',
                html: true,
            });
        }
}