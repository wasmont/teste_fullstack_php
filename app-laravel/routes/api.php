<?php

use App\Http\Controllers\ProdutoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('create', [ProdutoController::class, 'store']);
Route::delete('delete/{id}', [ProdutoController::class, 'destroy']);
Route::get('search/{id?}', [ProdutoController::class, 'getProduct']);
Route::put('update', [ProdutoController::class, 'update']);
Route::get('marcas', [ProdutoController::class, 'getMarcas']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
