<?php

namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
use App\banks;
 
class LoginController extends Controller
{
    public function __construct()
    {
        //
    }

    public function login(Request $request)
    {
        /*public function login(Request $request)
        {*/
        /*$this->validate($request, [
            'username' => 'required',
            'password' => 'required',
        ]);

        $a = banks::create($request->all());
        return response()->json($a, 201);*/

       $rules = [
          'bank_id' => 'required',
          'password' => 'required'
       ];
 
        $customMessages = [
           'required' => ':attribute all need'
       ];

        $this->validate($request, $rules, $customMessages);

       /*$user_data = array(
           'username' => $request->get('username'),
           'password' => $request->get('password')
       )*/


        $bank_id    = $request->input('bank_id');

        try {
            $login = banks::where('bank_id', $bank_id)->first();
            if ($login) {
                if ($login->count() > 0) {
                    if ($request->input('password')== $login->password) {
                        try {
                            //$api_token = sha1($login->id_user.time());
 
                              //$create_token = banks::where('id', $login->id_user)->update(['api_token' => $api_token]);
                              $res['status'] = true;
                              $res['message'] = 'Success login';
                              $res['data'] =  $login;
                              //$res['api_token'] =  $api_token;
 
                              return response($res, 200);
 
 
                        } catch (\Illuminate\Database\QueryException $ex) {
                            $res['status'] = false;
                            $res['message'] = $ex->getMessage();
                            return response($res, 500);
                        }
                    } else {
                        $res['success'] = false;
                        $res['message'] = 'Incorrect password';
                        return response($res, 401);
                    }
                } else {
                    $res['success'] = false;
                    $res['message'] = 'Incorrect username';
                    return response($res, 401);
                }
            } else {
                $res['success'] = false;
                $res['message'] = 'Username not found';
                return response($res, 401);
            }
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['success'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }
}

?>