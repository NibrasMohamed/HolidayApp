<?php

namespace App\Http\Controllers;

use App\Holiday;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function create(Request $request){
        // dd($request);
        Holiday::create([
            'name'=> $request->input('name'),
            'start_date'=>$request->input('start'),
            'end_date'=>$request->input('end')
        ]);
        return redirect('/')->with('success');
    }
    public function view(){

    }
    public function update(){
        
    }
    public function destroy(Request $request){
        
    }
}
