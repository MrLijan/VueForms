<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\FilledFormController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


/**
 * Authentication routes
 */

Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
});

//     Route::post('auth/logout', [AuthController::class, 'logout']);
// });

// Route::middleware('auth:sanctum')->get('/user', function (Request $request, Response $response) {
//     return $request->user();
// });

Route::get('/forms', [FormController::class, 'index']);
Route::post('/forms/create', [FormController::class, 'create']);
Route::get('/forms/{key}', [FormController::class, 'show']);
Route::delete('/forms/{key}/delete', [FormController::class, 'destroy']);
Route::put('/forms/{key}/update', [FormController::class, 'update']);

Route::get('/filled', [FilledFormController::class, 'index']);
Route::get('/filled/count', [FilledFormController::class, 'count']);
Route::get('filled/{key}', [FilledFormController::class, 'show']);
Route::delete('filled/{key}/delete', [FilledFormController::class, 'destroy']);
Route::post('/filled/create', [FilledFormController::class, 'create']);

