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

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'user@example.com',
        //     'password' => bcrypt('password@123'),
        //     'email_verified_at' => time(),
        // ]);

        $users = [
            // [
            //     'name' => 'Test Super Admin',
            //     'email' => 'superadmin@example.com',
            //     'password' => bcrypt('password@123'),
            //     'email_verified_at' => now(),
            //     'role' => 'superAdmin',
            // ],
            [
                'name' => 'Test Admin',
                'email' => 'admin@example.com',
                'password' => bcrypt('password@123'),
                'email_verified_at' => now(),
                'role' => 'admin',
            ],
            [
                'name' => 'Test User',
                'email' => 'user@example.com',
                'password' => bcrypt('password@123'),
                'email_verified_at' => now(),
                'role' => 'user',
            ],
        ];

        foreach ($users as $user) {
            User::factory()->create($user);
        }

        // User::factory()->count(5)->create();

        Project::factory()
            ->count(15)
            ->hasTasks(6)
            ->create();
    }
}
