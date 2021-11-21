<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Http\Requests\FormRequest;
use App\Models\Form;
use App\Models\FilledForm;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreFormRequest;

class FormController extends Controller
{

    protected function randKey() 
    {
        return rand(100000, 999999);
    }

    /*
     * -> The following function will return the number of the filled
     *    forms, grouped by key.
    */
    protected function countFilled($key) 
    {
        $numOfFilled = FilledForm::where('form_key', (int) $key)->get(); 
        
        return $numOfFilled->count();
    }


    public function index(Request $req) 
    {
        $perPage = 10;
        $forms = Form::paginate($perPage);

        foreach($forms as $form)
        {
            $form->filled_count = $this->countFilled($form->key);
        }


        $forms->count_forms = $forms->count();
        return $forms;
    }


    
    
    public function show($key)
    {
        return Form::where('key', (int)$key)->first();
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

    

    public function createForm(StoreFormRequest $request) 
    {
        $validated = $request->validated();
        $validated['key'] = $this->randKey();
       
        // Create the form
        $form = Form::create($validated);
        
        return response()->json([
            'result' => 'created',
            'form_key' => $validated['key']
        ], 201);

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


        return response()->json(["result" => 'Updated', 201]);
    }
}
