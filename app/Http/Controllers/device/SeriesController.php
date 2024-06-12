<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Exports\EpisodesExport;
use App\Models\Episode;
use App\Models\Movie;
use App\Models\Series;
use App\Models\Category;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Facades\Excel;
use \Gumlet\ImageResize;


class SeriesController extends Controller
{
     


    public function getCategoryNames($categoryIds)
    {
        // Split the comma-separated values into an array
        $categoryIdArray = explode(',', $categoryIds);
    
        // Fetch the category names using Eloquent
        $categoryNames = Category::whereIn('id', $categoryIdArray)->pluck('name')->toArray();
    
        // Format the category names into a string
        $formattedCategoryNames = implode(', ', $categoryNames);
    
        return $formattedCategoryNames;
    }


    public function getCategoryNames_ar($categoryIds)
    {
        // Split the comma-separated values into an array
        $categoryIdArray = explode(',', $categoryIds);
    
        // Fetch the category names using Eloquent
        $categoryNames = Category::whereIn('id', $categoryIdArray)->pluck('code')->toArray();
    
        // Format the category names into a string
        $formattedCategoryNames = implode(', ', $categoryNames);
    
        return $formattedCategoryNames;
    }
    

    public function ListSeries(request $request){


            // $this->authorizeForUser($request->user('api'), 'view', Movie::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();
        // Filter fields With Params to retrieve
        $columns = array(0 => 'ar_name', 1 => 'en_name' );
        $param = array(0 => 'like', 1 => '='   );
        $data = array();

        $movies = Series::where('deleted_at', '=', null);

        //Multiple Filter
        $Filtred = $helpers->filter($movies, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('serieses.ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('serieses.en_name', 'LIKE', "%{$request->search}%");
                        
                   
                });
            });
        $totalRows = $Filtred->count();
        $movies = $Filtred->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();


 


  
            foreach ($movies as $movie) {
                $item['id'] = $movie->id;
                $item['ar_name'] = $movie->ar_name;
                $item['en_name'] = $movie->en_name;
                $item['rate'] = $movie->rate;
                $item['category_en'] =   $this->getCategoryNames($movie->category);  
                $item['category_ar'] =   $this->getCategoryNames_ar($movie->category);  
                $firstimage = explode(',', $movie->image);
                $item['image'] = $firstimage[0];
                $data[] = $item;
            }
    

 

        return response()->json([
 
            'movies' => $data,
            'totalRows' => $totalRows,
        ]);



    }
}
