<?php

namespace Database\Factories;

use App\Models\Tools;
use Illuminate\Database\Eloquent\Factories\Factory;

class ToolsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Tools::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name(),
            'link' => $this->faker->url,
            'description' => $this->faker->sentence(),
        ];
    }
}