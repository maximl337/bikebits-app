@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    What are you here for?
                </div>

                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-4">
                            <a class="btn btn-default form-control"
                                href="/bike">
                                Bike
                            </a>
                        </div>
                        <!-- /.col-md-4 -->
                        <div class="col-md-4">
                            <a class="btn btn-default form-control"
                                href="#">
                                Me
                            </a>
                        </div>
                        <!-- /.col-md-4 -->
                        <div class="col-md-4">
                            <a class="btn btn-default form-control"
                                href="#">
                                Trail
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

    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    How it works
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel panel-default -->
        </div>
        <!-- /.col-md-12 -->
    </div>
    <!-- /.row -->
</div>
<!-- /.container-fluid -->
@endsection
