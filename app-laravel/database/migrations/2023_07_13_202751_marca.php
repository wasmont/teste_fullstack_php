<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('marca', function (Blueprint $table) {
            $table->id();
            $table->text('nome'); 
            $table->engine = 'InnoDB';
            $table->collation = 'utf8mb4_unicode_ci';
        });

        DB::table('marca')->insert([
            ['id' => 1, 'nome' => 'Electrolux'],
            ['id' => 2, 'nome' => 'Brastemp'],
            ['id' => 3, 'nome' => 'Fischer'],
            ['id' => 4, 'nome' => 'Samsung'],
            ['id' => 5, 'nome' => 'LG'],
        ]);
    }
        
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('marca');
    }
};
