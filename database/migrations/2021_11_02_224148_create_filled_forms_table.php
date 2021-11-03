<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilledFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('filled_forms', function (Blueprint $table) {
            $table->id();
            $table->timestamps('created_at');
            $table->integer('key')->unique();
            $table->string('name');
            $table->string('description');
            $table->string('creator');
            $table->array('fields');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('filled_forms');
    }
}
