<?php
namespace App\Http\Controllers;

use App\Models\Ad;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
// use Intervention\Image\ImageManagerStatic as Image;

class AdsController extends Controller
{

    //------------ GET ALL Ads -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Ad::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $ads = Ad::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ads', 'LIKE', "%{$request->search}%")
                        ->orWhere('ads', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $ads->count();
        $ads = $ads->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'ads' => $ads,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Ad -------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Ad::class);

        // request()->validate([
        //     'ar_name' => 'required',
        // ]);

        \DB::transaction(function () use ($request) {
 
            $Ad = new Ad;
            $Ad->ads = $request['ads'];
            $Ad->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Ad -------------\

     public function update(Request $request, $id)
     {
 
        //  $this->authorizeForUser($request->user('api'), 'update', Ad::class);
  
         \DB::transaction(function () use ($request, $id) {
             $Ad = Ad::findOrFail($id);
    
             Ad::whereId($id)->update([
                 'ads' => $request['ads'],
        
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Ad -----------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Ad::class);

        Ad::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'delete', Ad::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $ad_id) {
            Ad::whereId($ad_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

