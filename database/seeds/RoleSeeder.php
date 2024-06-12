<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::unprepared('SET IDENTITY_INSERT roles ON');
        // Insert some stuff
	    DB::table('roles')->insert(
            array([
                'id'    => 1,
                'name'  => 'Owner',
                'label' => 'Owner',
                'description' => 'Owner',
            ])
        );

        DB::unprepared('SET IDENTITY_INSERT roles OFF');
    }
}
