<?php

namespace App\Http\Controllers;
use Illuminate\Validation\ValidationException;
use App\Loan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoanController extends Controller
{

  	
	 
	

	
	public function getloans($bank_id,Request $request){
    //$telephone_number =$request->input('telephone_number');
    //$user = Loan::where('bank_id',$bank_id)->first();
	$user = Loan::where('bank_id',$bank_id)->get();
    return $user;
	}
	
		
	public function getloandetails($loan_id,Request $request){
    //$telephone_number =$request->input('telephone_number');
    //$user = Loan::where('bank_id',$bank_id)->first();
	$user = Loan::where('loan_id',$loan_id)->first();
    return $user;
	}
	

}