<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::unprepared('SET IDENTITY_INSERT servers ON');
       // Insert some stuff
        DB::table('servers')->insert(
            array(
                'id' => 1,
                'host' => 'mailtrap.io',
                'port' => '2525',
                'username' => 'test',
                'password' => 'test',
                'encryption' => 'tls',
            )
            
        );

        DB::unprepared('SET IDENTITY_INSERT servers OFF');
    }
}
