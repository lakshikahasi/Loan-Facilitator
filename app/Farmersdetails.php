<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Farmersdetails extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
	
	 
    protected $fillable = [
        'telephone_number','choose','nameini','namefull','address','TpNo','dob','nic','email'
    ];
	
	

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}