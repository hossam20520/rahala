<?php
namespace App\Http\Controllers;

use App\Models\Notification;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class NotificationsController extends Controller
{

    //------------ GET ALL Notifications -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Notification::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $notifications = Notification::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $notifications->count();
        $notifications = $notifications->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'notifications' => $notifications,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Notification -------------\

    public function store(Request $request)
    {


        // $this->authorizeForUser($request->user('api'), 'create', Notification::class);
        // request()->validate([
        //     'ar_name' => 'required',
        // ]);

        \DB::transaction(function () use ($request) {

     
            $Notification = new Notification;
            $Notification->title = $request['title'];
            $Notification->body = $request['body'];
            $Notification->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Notification -------------\

     public function update(Request $request, $id)
     {
 
        //  $this->authorizeForUser($request->user('api'), 'update', Notification::class);
 
        //  request()->validate([
        //      'ar_name' => 'required',
        //  ]);
         \DB::transaction(function () use ($request, $id) {
             $Notification = Notification::findOrFail($id);
          
             Notification::whereId($id)->update([
                 'title' => $request['title'],
                 'body' => $request['body'],
               
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Notification -----------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Notification::class);

        Notification::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'delete', Notification::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $notification_id) {
            Notification::whereId($notification_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

