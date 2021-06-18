<?php

namespace Tests\Feature;

use App\Http\Resources\ToolsResource;
use App\Models\Tag;
use App\Models\Tool;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ToolsTest extends TestCase
{
    use RefreshDatabase;

    private array $fields = [
        'id',
        'title',
        'link',
        'description'
    ];

    public function testItShouldBeAbleListACollectionOfTools()
    {
        Tool::factory()->count(3)->create();

        $response = $this->get(route('tools.index'));
        $response->assertStatus(200)
                ->assertJsonStructure([
                    'data' => [
                        '*' => $this->fields
                    ]
                ]);
    }

    public function testItShouldBeAbleListASingleTool()
    {
        $tags = Tag::factory()->count(15)->create();
        $tools = Tool::factory()->count(3)->create()->each(function (Tool $tool) use ($tags) {
            $tagsId = $tags->random(5)->pluck('id')->toArray();
            $tool->tags()->attach($tagsId);
        });

        $firstTool = $tools->first();
        $response = $this->get(route('tools.show', ['tool' => $firstTool->id]));
        $resource = (new ToolsResource($firstTool))->response($response)->getData(true);
        $response->assertStatus(200)->assertJson($resource);
    }

    public function testItShouldBeAbleDeleteATool()
    {
        $tool = Tool::factory()->count(1)->create()->first();
        $this->delete(
            route(
                'tools.destroy',
                ['tool' => $tool->id]
            )
        )->assertStatus(204);
        $this->assertDatabaseMissing('tools', $tool->toArray());
    }
}
