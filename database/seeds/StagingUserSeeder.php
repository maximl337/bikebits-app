<?php

use Illuminate\Database\Seeder;

class StagingUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	DB::statement('SET FOREIGN_KEY_CHECKS = 0'); // disable foreign key constraints
        DB::table('users')->truncate();
        $data= [
        	[
		        'first_name' => 'Angad', 
		        'last_name' => 'Dubey',
		        'email' => 'angad_dubey@hotmail.com', 
		        'password' => bcrypt('test123'),
		    ],
        	[
		        'first_name' => 'Don', 
		        'last_name' => 'Cameron', 
		        'email' => 'dac1199x@gmail.com', 
		        'password' => bcrypt('test123#'),
		    ],
		    [
		        'first_name' => 'Don', 
		        'last_name' => 'Cameron', 
		        'email' => 'jacameron@gmail.com', 
		        'password' => bcrypt('test123#'),
		    ]
        ];
        DB::table('users')->insert($data);
        DB::statement('SET FOREIGN_KEY_CHECKS = 1'); // enable foreign key
    }
}
