<?php

namespace App\Http\Controllers;
use Illuminate\Validation\ValidationException;
use App\Applications;
use App\Farmersdetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class requestController extends Controller
{
	
  	
	 public function showapplications($loan_id)
    {
    //  $user=Applications::where('loan_id', $loan_id)->join('farmersdetails',
      // 'nic','applications.nic')
       //->select('nameini','date')->get();
	   
	   $user = Applications::join('farmersdetails', 'farmersdetails.nic', '=', 'applications.nic')
      ->where('loan_id', '=',$loan_id)
      ->select('nameini', 'date','applications.id')
     ->get();
	
       if ($user) {
        $res['status'] = true;
        $res['message'] = $user;

        return response($res);
        }
		else{
           $res['status'] = false;
           $res['message'] = 'Cannot find applicants!';

         return response($res);
        }
		
	}
	
	public function showfarmerdetails($id)
    {
    //  $user=Applications::where('loan_id', $loan_id)->join('farmersdetails',
      // 'nic','applications.nic')
       //->select('nameini','date')->get();
	   
	   $user = Applications::join('farmersdetails', 'farmersdetails.nic', '=', 'applications.nic')
    ->where('applications.id', '=',$id)
    ->select('choose', 'nameini','namefull','address','TpNo','dob','farmersdetails.nic','email')
    ->get();
	
       if ($user) {
        $res['status'] = true;
        $res['message'] = $user;

        return response($res);
        }
		else{
           $res['status'] = false;
           $res['message'] = 'Cannot find applicant!';

         return response($res);
        }
		
	}
	
	
	

}