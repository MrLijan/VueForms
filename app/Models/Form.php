<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;

use Jenssegers\Mongodb\Eloquent\Model;

class Form extends Model 
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'forms';
    protected $guarded = ["_id"];

    public const validation_rules = [
        'name' => "string|required|max:100",
        'description' => "nullable|string",
        'creator' => "string|required|max:100",
        'fields' => "array|required|min:1",
        'fields.*.title' => "string|required|max:100",
        'fields.*.type' => "string|required",
        'fields.*.isRequired' => "boolean|required",
        'fields.*.options' => "array|nullable",
        'fields.*.options.*' => "string|max:25",
        'fields.*.answer' => "string|nullable"
    ];
}
