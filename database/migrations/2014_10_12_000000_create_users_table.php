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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('username');
            $table->unsignedBigInteger('wallet')->default('0'); // Adding phone_number as a numeric field
            $table->unsignedBigInteger('number'); // Adding phone_number as a numeric field
            $table->string('account_number')->default('1'); // Replace 'DEFAULT_ACCOUNT_NUMBER' with your desired default value
            $table->string('account_name')->default('1');     // Replace 'DEFAULT_ACCOUNT_NAME' with your desired default value
            $table->string('bank')->nullable();
            $table->string('email')->unique();
            $table->string('bonus')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('address')->nullable();
            $table->string('gender')->nullable();
            $table->string('dob')->nullable();
            $table->string('google_id')->nullable();
            $table->rememberToken();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
