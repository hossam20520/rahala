<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Wallet extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        
        Schema::create('wallet', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
            $table->increments('id');
			$table->integer('mobile_user_id')->nullable();
            $table->integer('user_CUSTEMPACCOUNTTB_id')->nullable();
            $table->float('wallet', 10, 0)->default(0);
            $table->integer('currency_id' )->default(1);


			$table->timestamps(6);
			$table->softDeletes();
		});



    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('wallet');
    }
}
