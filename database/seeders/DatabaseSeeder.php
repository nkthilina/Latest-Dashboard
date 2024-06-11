<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Project;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'role' => 'user',
            'password' => bcrypt('password@123'),
            'email_verified_at' => time(),
        ]);

        User::factory()->create([
            'name' => 'Test Admin',
            'email' => 'admin@example.com',
            'role' => 'admin',
            'password' => bcrypt('password@123'),
            'email_verified_at' => time(),
        ]);

        // User::factory()->count(10)->create();

        // Project::factory()
        //     ->count(30)
        //     ->hasTasks(30)
        //     ->create();
    }
}
