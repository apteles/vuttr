<?php

namespace Database\Seeders;

use App\Models\Tag;
use App\Models\Tool;
use Illuminate\Database\Seeder;

class ToolsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {    $tags = Tag::all();
         Tool::factory(10)->create()->each(function(Tool $tool) use ($tags){
            $tagsId = $tags->random(5)->pluck('id')->toArray();
            $tool->tags()->attach($tagsId);
         });
    }
}
