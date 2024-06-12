<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::unprepared('SET IDENTITY_INSERT settings ON');
       // Insert some stuff
        DB::table('settings')->insert(
            array(
                'id' => 1,
                'email' => 'admin@example.com',
                'currency_id' => 1,
            
       
                'CompanyName' => 'coopxl',
                'CompanyPhone' => '01111788511',
                'CompanyAdress' => 'Egypt fayoum',
                'footer' => 'hossamhassan889@gmail.com',
                'developed_by' => 'hossam20520',
                'logo' => 'logo-default.png',
            )
            
        );

        DB::unprepared('SET IDENTITY_INSERT settings OFF');
    }
}
