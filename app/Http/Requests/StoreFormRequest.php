<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;



class StoreFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => "string|required|max:100",
            'description' => "nullable|string",
            'creator' => "string|required|max:100",
            'fields' => "array|required|min:1",
            'fields.*.title' => "string|required|max:100",
            'fields.*.type' => "string|required",
            'fields.*.required' => "boolean|required",
            'fields.*.answer' => "string|nullable"
        ];
    }

    protected function failedValidation(Validator $validator)
{
    $errors = $validator->errors();

    $response = response()->json([
        'message' => 'Invalid data send',
        'details' => $errors->messages(),
    ], 422);

    throw new HttpResponseException($response);
}

}
