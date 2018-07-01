<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0'); // disable foreign key constraints
        DB::table('categories')->truncate();
        $data = [
            [ 
                "title" => "Bike",
                "image" => "https://i.imgur.com/rbcf0Fc.png",
                "description" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

            ],
            [ 
                "title" => "Me",
                "image" => "https://i.imgur.com/rbcf0Fc.png",
                "description" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

            ],
            [ 
                "title" => "Trails",
                "image" => "https://i.imgur.com/rbcf0Fc.png",
                "description" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

            ],
        ];
        DB::table('categories')->insert($data); 
        DB::statement('SET FOREIGN_KEY_CHECKS = 1'); // enable foreign key
    }
}
