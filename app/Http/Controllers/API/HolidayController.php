<?php

namespace App\Http\Controllers\API;

use App\Holiday;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HolidayController extends Controller
{
    public function index(){
        $data = Holiday::all();
        return response()->json([
            'status' => 200,
            'Holidays' => $data,
            'test' => 'pass',
        ]);
    }
    public function store (Request $request){
        $data = new Holiday();
        $data->name=$request->input('name');
        $data->from=$request->input('from');
        $data->to=$request->input('to');
        $data->save();

       return response()->json([
           'status' => 200,
           'message'=> 'Student addes succesfully',
       ]);

    }

    public function edit ($id){
        $data = Holiday::find($id);

        return response()->json([
            'status' => 200,
            'message' => 'request completed',
            'holiday'=> $data,

        ]);

    }
    public function update(Request $request, $id){
        $data = Holiday::find($id);
        $data->name=$request->input('name');
        $data->from=$request->input('from');
        $data->to=$request->input('to');
        $data->update();

       return response()->json([
           'status' => 200,
           'message'=> 'Holiday addes succesfully',
       ]);

    }
    public function destroy($id){
        $data = Holiday::find($id);
        $data->delete();
        return response()->json([
            'status' => 200,
            'message'=> 'Holiday deleted succesfully',
        ]);
    }

}
