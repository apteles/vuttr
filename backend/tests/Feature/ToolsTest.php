<?php

namespace Tests\Feature;

use Tests\TestCase;

class ToolsTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testItShouldReturnWithResponseOk()
    {
        $response = $this->get('/api/tools');

        $response->assertStatus(200);
    }
}
