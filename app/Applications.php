<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Applications extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'loan_id','nic','date','crop','whatfor','reason','amount','months','civil','spousename','spo_emplo','children','fix_name','fix_deed','fix_size','fix_value','mot_about','mot_location','mot_value','gua1_name','gua1_occ','gua1_tp','gua2_name','gua2_occ','gua2_tp'
    ];
	
	

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}