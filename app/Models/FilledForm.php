<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model; -> Default

use Jenssegers\Mongodb\Eloquent\Model;

class FilledForm extends Model
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'FilledForms';
}
