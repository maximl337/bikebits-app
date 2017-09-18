@extends('layouts.app')

@section('content')
<div class="container-fluid" id="shocks">
    <div class="row">
        <div class="col-md-12">
            <ul class="breadcrumb">
                <li><a href="/home">Home</a></li>
                <li><a href="/bike">Bike</a></li>
                <li class="active">Shocks</li>
            </ul>
        </div>
        <!-- /.col-md-12 -->
        <div class="col-md-12">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for...">
                <span class="input-group-btn">
                    <button class="btn btn-default" 
                        type="button">
                        Go!
                    </button>
                </span>
            </div><!-- /input-group -->
            <br />
        </div>
        <!-- /.col-md-12 -->
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Popular in this category
                </div>

                <div class="panel-body">
                    
                    <div v-for="(video, index) in videos">
                        <img className="media-object"
                        v-bind:src="video.thumbnail" />
                        <br />
                        <div className="media-heading">
                            @{{video.title}}
                        </div>
                    </div>
                    
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-md-12 -->
    </div>
    <!-- /.row -->
</div>
<!-- /.container-fluid -->
@endsection
@section('script')
<script>
new Vue({

    el: "#shocks",

    data: {

        videos: []
    },

    methods: {

    },

    mounted: function() {

        utils.spinner();

        var self = this;

        YTSearch({ key: 'AIzaSyCue6uy1WzHxnmwFpQj7YAWEB9MGxe5Tv4', term: 'shocks' }, function(vids) {
            
            self.videos = vids.map(function(vid) {
                return {
                    id: vid.id.videoId,
                    thumbnail: vid.snippet.thumbnails.high.url,
                    title: vid.snippet.title,
                    desc: vid.snippet.description
                }
            });


            swal.close();
        });
    }

});
</script>
@endsection