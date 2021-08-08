@extends('layouts.app')
@section('content')
<h1 class="text-center"><b>Holiday Management</b></h1>
    <form action="/create" method="post" class="form-control">
      @csrf
        <div>
            <label for="name">Holiday Name</label>
            <input type="text" class="form-control" id="name"  placeholder="Enter Holiday name" name="name">
        </div>
          <div>
            <label for="start">Start </label>
            <input type="date" class="form-control" id="start" placeholder="from" name="start">
            <label for="end">end </label>
            <input type="date" class="form-control" id="end" placeholder="to" name="end"> 
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>

    </form>
@endsection