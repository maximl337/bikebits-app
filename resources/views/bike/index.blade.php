@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <ul class="breadcrumb">
                <li><a href="/home">Home</a></li>
                <li class="active">Bike</li>
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
                    What are you here for?
                </div>

                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-6">
                            <a class="btn btn-default form-control"
                                href="/bike/shocks">
                                Shocks
                            </a>
                        </div>
                        <!-- /.col-md-4 -->
                        <div class="col-md-6">
                            <a class="btn btn-default form-control"
                                href="/bike/shocks">
                                Cockpit
                            </a>
                        </div>
                        <!-- /.col-md-4 -->
                    </div>
                    <!-- /.row -->
                    <br />

                    <div class="row">
                        <div class="col-md-6">
                            <a class="btn btn-default form-control"
                                href="/bike/shocks">
                                Tires
                            </a>
                        </div>
                        <!-- /.col-md-4 -->
                        <div class="col-md-6">
                            <a class="btn btn-default form-control"
                                href="/bike/shocks">
                                Chain & Gear
                            </a>
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
