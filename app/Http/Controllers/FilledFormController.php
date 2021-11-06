<?php

namespace App\Http\Controllers;

use App\Models\FilledForm;
use Illuminate\Http\Request;

class FilledFormController extends Controller
{

    protected function randKey() 
    {
        return rand(10000000, 99999999);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $req)
    {
        $filled = new FilledForm;
        
        $filled->filled_by = $req->filled_by;
        $filled->submit_key = $this->randKey();
        $filled->context = $req->context;

        
        $filled->save();

        return response()->json(["result" => 'Created', 201]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FilledForm  $filledForm
     * @return \Illuminate\Http\Response
     */
    public function show(FilledForm $filledForm)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FilledForm  $filledForm
     * @return \Illuminate\Http\Response
     */
    public function edit(FilledForm $filledForm)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FilledForm  $filledForm
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FilledForm $filledForm)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FilledForm  $filledForm
     * @return \Illuminate\Http\Response
     */
    public function destroy(FilledForm $filledForm)
    {
        //
    }
}
