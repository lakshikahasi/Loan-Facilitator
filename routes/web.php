<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

/*$router->group(['prefix' => 'api'], function () use ($router) {
    //$router->post('banks', ['uses' => 'BankController@register']);
    //$router->post('farmers', ['uses' => 'FarmerController@register']);
});*/

$router->post('/login', 'LoginController@login');



$router->get('/bankdetails/{bank_id}', 'BankController@bankdetails');
$router->get('/getloans/{bank_id}', 'LoanController@getloans');
//$router->get('/showapplications/{loan_id}', 'requestController@showapplications');

$router->get('/showapplications/{loan_id}', [ 'uses' => 'requestController@showapplications']);
$router->get('/showfarmerdetails/{id}', [ 'uses' => 'requestController@showfarmerdetails']);