<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class FilledFormFactory extends Factory
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
            "form_key" => $this->faker->numberBetween(100000, 999999),
            "form_name" => $this->faker->sentence(5),
            "filled_key" => $this->faker->numberBetween(10000000, 99999999),
            "filled_by" => $this->faker->name(),
            "fields" => (object) [
                (object) [
                    "title" => $this->faker->sentence(3),
                    "type" => $this->randType(),
                    "isRequired" => true,
                    "answer" => null
                ],
                (object) [
                    "title" => $this->faker->sentence(3),
                    "type" => $this->randType(),
                    "isRequired" => true,
                    "answer" => null
                ],
                (object) [
                    "title" => $this->faker->sentence(3),
                    "type" => $this->randType(),
                    "isRequired" => true,
                    "answer" => null
                ]
            ]
        ];
        
    }
}