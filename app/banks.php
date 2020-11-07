<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class banks extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'bank_id','password','bank_name','bank_des','bank_logo'
    ];
	
	

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}