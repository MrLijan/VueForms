<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\AuthRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(AuthRequest $req)
    {
        $fields = $req->validated();

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        return response([
            'message' => 'User Created',
            'data' => $token
        ], 201);
    }

    public function login(AuthRequest $req)
    {
        $fields = $req->validated();

        // Check email
        $user = User::where('email', $fields['email'])->first();

        // Check Password
        if(!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Bad Credentials'
            ], 401);
        }

        // dd($user->createToken('lala'));
        dd($user);
        // $token = $req->user()->createToken($req->token_name);

        // return response([
        //     'message' => 'User Authenticated',
        //     'token' => $token
        // ], 201);
    }
}
