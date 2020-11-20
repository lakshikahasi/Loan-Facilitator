<?php

namespace App\Http\Controllers;
use Illuminate\Validation\ValidationException;
use App\banks;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Hash;

class BankController extends Controller
{

  	 public function bankdetails($bank_id,Request $request)
    {
    /* $bank = Bank::findOrFail($bank_id);

     $image_file = Bank::make($bank->bank_logo);

     $response = Response::make($image_file->encode('jpeg'));

     $response->header('Content-Type', 'image/jpeg');

     return $response;*/
	//
    //return $user;
	
	
	 $user = banks::where('bank_id',$bank_id)->first();
	return $user;
        //return response()->json(banks::all());
    

    }
	
	
	

}