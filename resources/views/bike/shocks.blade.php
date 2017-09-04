@extends('layouts.app')

@section('content')
<div class="container-fluid">
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
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <iframe width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/C3JfuVmKliE" 
                                frameborder="0" allowfullscreen></iframe>
                        </div>
                        <!-- /.col-md-4 -->
                        <div class="col-md-6 text-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rUX_cTuk3O8" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <!-- /.col-md-4 -->
                    </div>
                    <!-- /.row -->
                    <br />
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <iframe width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/hyrcgkLa6E8" 
                                frameborder="0" allowfullscreen></iframe>
                        </div>
                        <!-- /.col-md-4 -->
                        <div class="col-md-6 text-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/bp0nxWZftdI" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <!-- /.col-md-4 -->
                    </div>
                    <!-- /.row -->
                    
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