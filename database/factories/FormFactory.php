<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class FormFactory extends Factory
{
    public function randType()
    { 
        $types = ['text', 'date', 'textarea'];
        return $types[random_int(0,2)];
    }
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        

        return [
            'created_at' => $this->faker->date(),
            'key' => $this->faker->numberBetween(111111, 999999),
            'name' => Str::random(25),
            'description' => Str::random(250),
            'creator' => $this->faker->name(),
            'fields' => [
                'title' => $this->faker->name(),
                'type' => $this->randType(),
                'required' => false,
                'answer' => null,
            ]
        ];
    }
}
