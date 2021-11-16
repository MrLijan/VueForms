<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Http\Requests\FormRequest;
use App\Models\Form;
use App\Models\FilledForm;

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
    
    /**
     * Paginated endpoint method
     */
    // public function indexPaginated(Request $req) 
    // {
    //     $formsCount = Form::all()->count();
        
    //     $perPage = 10;
    //     $page = $req->input('page', 1);
    //     $pages = ceil($formsCount / $perPage);
    //     $skip = ceil(($perPage * $page) - $perPage);

    //     $forms = Form::skip($skip)
    //                 ->take($perPage)
    //                 ->get();


    //     return [
    //         'data' => $forms,
    //         'total' => $formsCount,
    //         'current_page' => $page,
    //         'total_pages' => $pages
    //     ];
    // }

    
    
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
