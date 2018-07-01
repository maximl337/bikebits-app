<?php

use Illuminate\Database\Seeder;

class JourneyObjectTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0'); // disable foreign key constraints
        DB::table('journey_object_types')->truncate();
        $data = [
            [ 
                "name" => "youtube",
            ],
        ];
        DB::table('journey_object_types')->insert($data); 
        DB::statement('SET FOREIGN_KEY_CHECKS = 1'); // enable foreign key
    }
}
