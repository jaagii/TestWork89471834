<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{

    protected $fillable = ['country_id', 'name'];
    use HasFactory;

    public function country()
    {
        # code...
        return $this->belongsTo(Country::class);
    }
}
