<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Http\Requests\FormRequest;
use App\Models\Form;

class FormController extends Controller
{

    protected function randKey() 
    {
        return rand(100000, 999999);
    }

    public function index() 
    {
        return Form::all();
    }

    
    
    public function show($key)
    {
        return Form::firstWhere('key', (int)$key)->get();
    }

    
    
    public function destroy($key)
    {
        $form = Form::where('key', (int)$key);
        $form->delete();

        return response()->json(['result' => 'Deleted'], 200);
    }

    public function create(Request $req) 
    {
        $form = new Form;
        
        $form->name = $req->name;
        $form->description = $req->description;
        $form->key = $this->randKey();
        $form->creator = $req->creator;
        $form->fields = $req->fields;

        
        $form->save();

        return response()->json(["result" => 'Created', 201]);

    }

    public function update(Request $req, $key) 
    {
        $form = Form::firstWhere('key', (int)$key)->update([
            "name" => $req->name,
            "description" => $req->description,
            "key" => $req->key,
            "creator" => $req->creator,
            "fields" => $req->fields
        ]);
        
            // $form->name = "LIRAM";
            // $form->description = $req->description;
            // $form->key = $req->key;
            // $form->creator = $req->creator;
            // $form->fields = $req->fields;

        

        
        // $form->save();

        return response()->json(["result" => 'Updated', 201]);
    }
}
