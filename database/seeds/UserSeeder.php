<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
        	"name"=>"Asif Islam",
        	"email"=>"az.asifislam@gmail.com",
        	"password"=>bcrypt('123456'),
        	"api_token"=>Str::random(100)
        ]);
    }
}
