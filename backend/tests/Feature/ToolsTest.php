<?php

namespace Tests\Feature;

use App\Http\Resources\ToolsResource;
use App\Models\Tools;
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
        Tools::factory()->count(3)->create();

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
        $tools = Tools::factory()->count(3)->create();
        $firstTool = $tools->first();
        $response = $this->get(route('tools.show', ['tool' => $firstTool->id]));
        $response->assertStatus(200)->assertJson([
            'data' => [
                'id' => $firstTool->id,
                'title' => $firstTool->title,
                'link' => $firstTool->link,
                'description' => $firstTool->description
            ]
        ]);
    }

    public function testItShouldBeAbleDeleteATool()
    {
        $tool = Tools::factory()->count(1)->create()->first();
        $this->delete(
            route(
                'tools.destroy',
                ['tool' => $tool->id]
            )
        )->assertStatus(204);
        $this->assertDatabaseMissing('tools', $tool->toArray());
    }
}
