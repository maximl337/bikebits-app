export default {

    storage: {
        get: function(key) {
            return localStorage.getItem(key);
        },
        set: function(key, value) {
            localStorage.setItem(key, value);
        },
        exists: function(key) {
            if(localStorage.getItem(key)) {
                return localStorage.getItem(key)
            }
            return false;
        }
    },

    spinner: function(text, title) {

        if(!text) {

            var text = 'Working. Hangon...';
        }

        swal({
            title: title,
            text: text,
            html: true,
            showConfirmButton: false
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
    },

    handleError: function(err) {
        if(err.response) {
            if(err.response.status == 422) {
                this.handle422Error(err.response.data);   
            } else {
                swal("Uh oh!", "Something went wrong", "error");
            }
        }
    },

    successFlash: function(text, title) {
        var text = text || 'Action completed successfully';
        var title = title || 'Done!';
        swal({
            title: title,
            text: text,
            type: 'success',
            showConfirmButton: false,
            timer: 1500
        });
    }
}