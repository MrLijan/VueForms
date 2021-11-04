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
            'created_at' => $this->faker->date(),
            'filled_by' => $this->faker->name(),
            'filled_key' => $this->faker->numberBetween(10000000, 99999999),
            'context' => (object) [
                'key' => $this->faker->numberBetween(123, 321),
                'fields' => [
                    (object) [
                        'title' => $this->faker->sentence(5),
                        'type' => $this->randType(),
                        'required' => false,
                        'answer' => null,
                    ],
                    (object) [
                        'title' => $this->faker->sentence(5),
                        'type' => $this->randType(),
                        'required' => false,
                        'answer' => null,
                    ]
                ]
            ]
        ];
    }
}