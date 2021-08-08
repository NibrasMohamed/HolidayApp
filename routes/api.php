<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\HolidayController;

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
Route::get('/edit-holiday/{id}', [HolidayController::class, 'edit']);
Route::get('/holidays', [HolidayController::class, 'index']);
Route::post('/save-holiday', [HolidayController::class, 'store']);
Route::put('/update-holiday/{id}', [HolidayController::class, 'update']);
Route::delete('/delete-holiday/{id}', [HolidayController::class, 'destroy']);
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
