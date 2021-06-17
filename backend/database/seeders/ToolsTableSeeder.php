<?php

namespace Database\Seeders;

use App\Models\Tools;
use Illuminate\Database\Seeder;

class ToolsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         Tools::factory(10)->create();
    }
}
