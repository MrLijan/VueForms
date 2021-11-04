<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Http\Requests\FormRequest;
use App\Models\Form;

class FormController extends Controller
{
    public function index() 
    {
        return Form::all();
    }

    
    
    public function show($key)
    {
        return Form::where('key', (int)$key)->get();
    }

    
    
    public function destroy($key)
    {
        $form = Form::where('key', (int)$key);
        $form->delete();

        return response()->json(['result' => 'Deleted'], 200);
    }

    public function create(Request $req) 
    {
        $data = $req;
        echo $data->getContent();
    }
}
