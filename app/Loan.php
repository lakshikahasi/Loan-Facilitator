<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'loan_id','bank_id','loan_name','genera_info','specific_info','eligible_borrowers','eligible_crops','maximum_loanamount','Rateofinterest','Repaymentperiod','more_info','loan_logo'
    ];
	
	

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}