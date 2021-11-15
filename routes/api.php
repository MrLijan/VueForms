<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\FilledFormController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/forms', [FormController::class, 'index']);
Route::get('/forms/paginated', [FormController::class, 'indexPaginated']);
Route::post('/forms/create', [FormController::class, 'create']);
Route::get('/forms/{key}', [FormController::class, 'show']);
Route::delete('/forms/{key}/delete', [FormController::class, 'destroy']);
Route::put('/forms/{key}/update', [FormController::class, 'update']);

Route::get('/filled', [FilledFormController::class, 'index']);
Route::get('/filled/count', [FilledFormController::class, 'count']);
Route::get('filled/{key}', [FilledFormController::class, 'show']);
Route::delete('filled/{key}/delete', [FilledFormController::class, 'destroy']);
Route::post('/filled/create', [FilledFormController::class, 'create']);

