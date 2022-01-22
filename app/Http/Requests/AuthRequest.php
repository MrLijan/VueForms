<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Route;


class AuthRequest extends FormRequest
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
     * Method to determine if the request is Login/Register.
     * @return string
     */
    private function checkRoute()
    {
        $uri = Route::current()->uri();
        return explode('/', $uri)[2];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if($this->checkRoute() === 'register') {
            return [
                'name' => 'required|string|max:25',
                'email' => 'required|string|email|unique:users,email',
                'password' => 'required|string|min:6|confirmed'
            ];
        }

        if ($this->checkRoute() === 'logout')
        {
            return [
                'token' => 'required|string|min:50'
            ];
        }

        return [
            'email' => 'required|string|email',
            'password' => 'required|string|min:6'
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
