<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Notifications extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
            $table->increments('id');
			$table->integer('user_id')->nullable();
            $table->integer('account_id')->nullable();
            $table->string('title', 192)->nullable(); 
            $table->string('body', 192)->nullable();
            $table->string('read', 192)->nullable();
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
        //
    }
}
