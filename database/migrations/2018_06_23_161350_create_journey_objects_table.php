<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJourneyObjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('journey_objects', function (Blueprint $table) {
            $table->increments('id');
            $table->string('object_id');
            $table->integer('object_type_id')->unsigned();
            $table->foreign('object_type_id')->references('id')->on('journey_object_types')->onDelete('cascade');
            $table->integer('journey_id')->unsigned();
            $table->foreign('journey_id')->references('id')->on('journeys')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('journey_objects');
    }
}
