<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Country;

use Illuminate\Http\Request;



class StateDataController extends Controller
{
    //
    public function countries(Request $request)
    {

        $countries = Country::all();

        return response()->json($countries);
    }
}
