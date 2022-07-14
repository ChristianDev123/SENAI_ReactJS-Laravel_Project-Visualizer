<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\VideoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[ProjectController::class,'all']);

Route::get('/{id}',[ProjectController::class,'projectByIdorName']);

Route::get('/allimages',[ImageController::class,'allImages']);

Route::get('/allvideos',[VideoController::class,'allVideos']);

Route::get('/allimages/{id}',[ImageController::class,'allImages']);

Route::get('/allvideos/{id}',[VideoController::class,'allVideos']);

Route::get('/file/{typefile}/{idproject}/{namefile}',[ProjectController::class,'getAnFile']);

Route::post('/newproject',[ProjectController::class,'createNewProject']);

Route::post('/newimage',[ImageController::class,'saveNewImage']);

Route::post('/newvideo',[VideoController::class,'saveNewVideo']);

// apenas para teste... sei que o certo é put; 
Route::post('/updateproject',[ProjectController::class,'updateProject']);

Route::delete('/removeproject/{name}',[ProjectController::class,'removeProject']);

Route::delete('/removeallimages/{name}',[ImageController::class,'removeImages']);

Route::delete('removeallvideos/{name}',[VideoController::class,'removeVideos']);