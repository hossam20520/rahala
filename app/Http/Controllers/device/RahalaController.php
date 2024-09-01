<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CurrencyMainTb;
use App\Models\CoBranchTb;
use App\Models\MonyTransTb;
use App\Models\AccounsActivityTb;
use App\Models\RhallaMobile_ShippingFollwoingTb;
use App\Models\FollowingDetails;
use App\Models\RhallaMobile_FollowingDetails;
use App\Models\appnotifications;
use App\Models\category;
use Illuminate\Support\Facades\Auth;
use App\Models\Wallet;
use App\Models\DeliveryStatusTb;
use App\Models\DeliveryStatusTb_Count;
 
use App\Models\ShippingFollwoingTb;
use App\Models\Driver_delivery_shipping;

use Illuminate\Support\Facades\DB;

// DriverID
class RahalaController extends Controller
{
    //




    public function GetBills(Request $request){

      $user = Auth::user();

 
      
 $results = DB::select('select a.Code_delivery , a.InsertDate ,a.Quantity , a.Paid__value , b.BName  , c.BName as Delivery_placeID 
from [dbo].[Driver_delivery_shipping] as a  inner join CoBranchTb as b on a.BranchID = b.id
 inner join CoBranchTb as c on c.ID = a.Delivery_placeID
 WHERE A.DriverID='.$user->account_ID );

       return response()->json([  'bills' =>   $results  ], 200);

    }




 public function GetAmanat(Request $request, $code){

 $user = Auth::user();

 
 $results = DB::select("
 SELECT 
     x.ISID,
     x.DeliveredStatus,
     x.Delivery_InsertDate,
     x.InsertDate,
     x.RecievedName,
     x.Qt,
     x.RPhone1,
     B.DName,
     IsPaid,
     c.BName as BranchID,
     d.BName as Delivery_placeID,
     a.Code_delivery
 FROM (
     SELECT 
         c.ISID,
         c.InsertDate,
         c.RecievedName,
         c.RPhone1,
         c.DeliveredStatus,
         c.Delivery_InsertDate,
         c.qt,
         a.ID_Delivery,
         CONVERT(NVARCHAR, CASE WHEN c.IsPaid = 'False' THEN 'غير خالص' ELSE 'خالص' END) AS IsPaid
     FROM [dbo].[Driver_delivery_shipping] AS a
     INNER JOIN [dbo].[Driver_delivery_shipping_Details] AS b ON a.Code_delivery = b.Code_delivery
     INNER JOIN [dbo].[internalshippingTb] AS c ON b.ISID COLLATE Arabic_CI_AS = c.ISID
     UNION
     SELECT 
         c.ISID,
         c.InsertDate,
         c.RecievedName,
         c.RPhone1,
         c.DeliveredStatus,
         c.Delivery_InsertDate,
         c.qt,
         a.ID_Delivery,
         CONVERT(NVARCHAR, CASE WHEN c.IsPaid = 'False' THEN 'غير خالص' ELSE 'خالص' END) AS IsPaid
     FROM [dbo].[Driver_delivery_shipping] AS a
     INNER JOIN [dbo].[Driver_delivery_shipping_Details] AS b ON a.Code_delivery = b.Code_delivery
     INNER JOIN [dbo].[ShippingFollwoingTb] AS c ON b.ISID = c.ISID COLLATE Arabic_CI_AS
 ) AS x
 INNER JOIN [Driver_delivery_shipping] AS a ON x.ID_Delivery = a.ID_Delivery
 INNER JOIN DeliveryStatusTb AS B ON x.DeliveredStatus = B.ID
 INNER JOIN CoBranchTb AS c ON a.BranchID = c.ID
 INNER JOIN CoBranchTb AS d ON a.Delivery_placeID = d.ID
 WHERE a.Code_delivery = ?
", [$code]);

       return response()->json([  'amanat' =>   $results  ], 200);

    }








 public function getOutAmanat(Request $request ){

      $user = Auth::user();
     
      
 $results = DB::select("select * from ( 

select a.ISID , a.SenderName COLLATE Arabic_CI_AS as SenderName  

, a.SPhone1  COLLATE Arabic_CI_AS as SPhone1  , a.SPhone2   COLLATE Arabic_CI_AS as SPhone2  , a.RecievedName , a.RPhone1 , a.RPhone2
, b.InsertDate as delivery_InsertDate ,a.TotalPrice , a.BounsValue ,a.OverallTotal ,a.DiscountValue   ,
a.AddressDescription ,c.BName ,d.BName as DeliveryPlaceID ,a.Qt ,case when a.IsPaid = 0  then 'غير خالص' else 'خالص' end  as IsPaid
,b.DriverID  ,e.DName , a.DeliveredStatus
from  internalshippingTb as a 
inner join Driver_delivery_shipping as b on b.ID_Delivery =  a.ID_Delivery 
inner join CoBranchTb as c on a.BranchID = c.ID 
inner join CoBranchTb as d on a.DeliveryPlaceID = d.ID 
inner join DeliveryStatusTb  as e on a.DeliveredStatus	 = e.ID
where d.TypeBracnh = 1 and a.IsActive= 1 
union 
select a.ISID , f.AccName , f.LogPhone1 , f.LogPhone2 , a.RecievedName , a.RPhone1 , a.RPhone2
, b.InsertDate as delivery_InsertDate ,a.TotalPrice , a.BounsValue ,a.OverallTotal ,a.DiscountValue   ,
a.AddressDescription ,c.BName ,d.BName ,a.Qt,case when a.IsPaid = 0  then 'غير خالص' else 'خالص' end  as IsPaid
,b.DriverID,e.DName , a.DeliveredStatus
from  ShippingFollwoingTb as a 
inner join Driver_delivery_shipping as b on b.ID_Delivery =  a.ID_Delivery 
inner join CoBranchTb as c on a.BranchID = c.ID 
inner join CoBranchTb as d on a.DeliveryPlaceID = d.ID 
inner join CUSTEMPACCOUNTTB as f on a.CodeID = f.ID
inner join DeliveryStatusTb  as e on a.DeliveredStatus	 = e.ID
where d.TypeBracnh = 1 and a.IsActive= 1 
)as x 
where x.DriverID= ? and x.DeliveredStatus= 2 or x.DeliveredStatus = 15  ", [$user->account_ID]);
     
  return response()->json([  'out_amanats' =>   $results  ], 200);
     
         }





    // getOutAmanat
    


    

       




 public function getDetailsHeader(Request $request , $iiscode){
   

   $user = Auth::user();
  
    $results = DB::select("
      select * from ( 
      select a.SenderName  COLLATE Arabic_CI_AS as  SenderName  , a.SPhone1  COLLATE Arabic_CI_AS as SPhone1   , a.SPhone2  COLLATE Arabic_CI_AS as 
      SPhone2 , a.RecievedName , a.RPhone1 , a.RPhone2 ,
      a.InsertDate ,a.Qt ,a.TotalPrice ,a.TaxiValue ,a.BounsValue ,a.DiscountValue ,a.OverallTotal  ,a.ISID , 
      c.BName ,  c.BName as DeliveryPlaceID
      from internalshippingTb as a 
      inner join CoBranchTb as b  on a.BranchID = b.ID
      inner join CoBranchTb as c  on a.DeliveryPlaceID = c.ID
      union 
      select b.AccName , b.LogPhone1 , b.LogPhone2 , a.RecievedName , a.RPhone1 , a.RPhone2 ,
      a.InsertDate ,a.Qt ,a.TotalPrice ,a.TaxiValue ,a.BounsValue ,a.DiscountValue ,a.OverallTotal  ,a.ISID 
      ,d.BName ,  e.BName as DeliveryPlaceID
      from ShippingFollwoingTb as a 
      inner join CUSTEMPACCOUNTTB as b on a.CodeID = b.ID
      inner join CoBranchTb as d  on a.BranchID = d.ID
      inner join CoBranchTb as e  on a.DeliveryPlaceID = e.ID
       ) as x 
       where x.ISID= ?
  ", [$iiscode]);




  $items = DB::select("
 select * from ( 
select b.CatDeName ,a.Price , a.Quantity ,a.TotalPrice  ,c.ISID
from internalshippingDetails as  a inner join  category  as b on a.CategoryID = b.ID 
inner join internalshippingTb as c on a.Sh_followingID = c.ID
union 
select b.CatDeName ,a.Price , a.Quantity ,a.TotalPrice  ,c.ISID
from FollowingDetails as  a inner join  category  as b on a.CategoryID = b.ID 
inner join ShippingFollwoingTb as c on a.Sh_followingID = c.ID 
) as x 
where x.ISID  = ?
", [$iiscode]);

       
              return response()->json([ 
                
                'header' =>   $results ,
                'items' => $items
            
            ], 200);
  
              
  
      }









      public function getEnterDeleviery(Request $request , $iiscode){
   

        $user = Auth::user();
       
         $results = DB::select("
         select * from ( 
select A.ISID , A.SPhone1 , A.SPhone2 , A.RecievedName , A.RPhone1 , A.RPhone2 ,  CASE WHEN A.IsPaid = 0   THEN 'خالص'ELSE 'غير خالص' END AS IsPaid 
,B.Code_delivery ,A.TotalPrice ,A.TaxiValue ,A.Qt ,A.OverallTotal ,E.BName  AS BranchID ,D.BName AS DeliveryPlaceID,A.AddressDescription,B.DriverID
,a.BounsValue,a.Latitude ,a.longitude ,a.MapLink
From internalshippingTb as a 
inner join Driver_delivery_shipping as b on a.ID_Delivery_Taxi = b.ID_Delivery 
INNER JOIN CoBranchTb AS E ON A.BranchID = E.ID 
INNER JOIN CoBranchTb AS D ON A.DeliveryPlaceID = D.ID 
UNION 
select A.ISID , A.SPhone1 , A.SPhone2 , A.RecievedName , A.RPhone1 , A.RPhone2 ,  CASE WHEN A.IsPaid = 0   THEN 'خالص'ELSE 'غير خالص' END AS IsPaid 
,B.Code_delivery ,A.TotalPrice ,A.TaxiValue ,A.Qt ,A.OverallTotal ,E.BName  AS BranchID ,D.BName AS DeliveryPlaceID,A.AddressDescription ,B.DriverID
,a.BounsValue,a.Latitude ,a.longitude ,a.MapLink
From internalshippingTb as a 
inner join Driver_delivery_shipping as b on a.ID_Delivery_Taxi = b.ID_Delivery 
INNER JOIN CoBranchTb AS E ON A.BranchID = E.ID 
INNER JOIN CoBranchTb AS D ON A.DeliveryPlaceID = D.ID 

) as x 
where x.ISID = ?", [$iiscode ]);
     
      //  $user->account_ID
     
     
 $items = DB::select("
     select * from (
select a.Quantity ,a.Price ,a.TotalPrice ,c.ISID,b.CatDeName
from internalshippingDetails as a
inner join category as b on a.CategoryID = b.ID 
inner join internalshippingTb as c on a.Sh_followingID= c.ID
union 
select a.Quantity ,a.Price ,a.TotalPrice ,c.ISID,b.CatDeName
from FollowingDetails as a
inner join category as b on a.CategoryID = b.ID 
inner join ShippingFollwoingTb as c on a.Sh_followingID= c.ID
) as x 
where x.ISID  = ?
     ", [$iiscode]);
     
            
                   return response()->json([ 
                     
                     'header' =>   $results ,
                     'items' => $items
                 
                 ], 200);
       
                   
       
           }




      
     



     
 public function CheckStatus(Request $request , $isid , $code ){
   

      $user = Auth::user();
 
      // $code = $request->input('code'); // Get code from request
      // $isid = '101-1'; // Define your ISID value
      $query = "
      SELECT a.ISID,
          CASE
              WHEN Recieved_code = ? THEN 1
              WHEN Sender_Code = ? THEN 2
              WHEN Office_code = ? THEN 3
          END AS Code_status,
          a.Recieved_code,
          a.Sender_Code,
          a.Office_code
      FROM internalshippingTb AS a
      UNION
      SELECT a.ISID,
          CASE
              WHEN Recieved_code = ? THEN 1
              WHEN Sender_Code = ? THEN 2
              WHEN Office_code = ? THEN 3
          END AS Code_status,
          a.Recieved_code,
          a.Sender_Code,
          a.Office_code
      FROM ShippingFollwoingTb AS a
      WHERE ISID = ?
          AND CONCAT(a.Recieved_code, a.Sender_Code, a.Office_code) LIKE ?
  ";

  $results = DB::select($query, [
      $code, $code, $code, 
      $code, $code, $code, 
      $isid, '%' . $code . '%'
  ]);
 
//   $results = DB::select("
//     select a.ISID  , case when Recieved_code =@Code   then 1 
//       when Sender_Code =@Code   then 2
//        when Office_code =@Code   then 3  
//      end as Code_status  
//      , A.Recieved_code  , 
//      A.Sender_Code , 
//      A.Office_code
//      from internalshippingTb as   a   
//      UNION 
//      select a.ISID  , case when Recieved_code =@Code   then 1 
//       when Sender_Code =@Code   then 2
//        when Office_code =@Code   then 3
//      end as Code_status  
//      , A.Recieved_code  , 
//      A.Sender_Code , 
//      A.Office_code
     
//      from ShippingFollwoingTb as   a   
//      )aS X 
     
//      where ISID = '101-1'   and X. Recieved_code +X.Sender_Code + X.Office_code like '%'+'102'+'%'  
// ", [$code]);
     

            return response()->json([  'status_code' =>   $results  ], 200);
       

    }



  public function getAmanaDetail(Request $request){
   

      $user = Auth::user();

 
  $results = DB::select("
    select 
    * from ( 

    SELECT A.ISID , A.InsertDate   , A.SenderName COLLATE Arabic_CI_AS  as SenderName 
    , A.SPhone1  COLLATE Arabic_CI_AS as SPhone1  ,A.SPhone2 COLLATE Arabic_CI_AS as SPhone2   ,A.RecievedName , A.RPhone1 , A.RPhone2 , A.Qt , A.TotalPrice ,A.TaxiValue 
    ,C.CatDeName , B.Quantity ,B.Price , B.TotalPrice  as TotalPriceDetails ,D.BName AS BranchID , E.BName AS DeliveryPlaceID ,A.Delivery_InsertDate  ,F.DName ,A.DiscountValue 
    FROM [dbo].[internalshippingTb] AS A INNER JOIN [dbo].[internalshippingDetails] AS B ON A.ID = B.Sh_followingID
    INNER JOIN category  AS C ON B.CategoryID =C.ID 
    INNER JOIN CoBranchTb AS D ON A.BranchID = D.ID
    INNER JOIN CoBranchTb AS E ON A.DeliveryPlaceID = E.ID
    INNER JOIN DeliveryStatusTb AS F ON A.DeliveredStatus = F.ID
    where a.IsActive= 1 
    UNION 

    SELECT A.ISID , A.InsertDate , G.AccName , G.LogPhone1 ,G.LogPhone2 ,A.RecievedName , A.RPhone1 , A.RPhone2 , A.Qt , A.TotalPrice ,A.TaxiValue 
    ,C.CatDeName , B.Quantity ,B.Price , B.TotalPrice as TotalPriceDetails ,D.BName AS BranchID , E.BName AS DeliveryPlaceID ,A.Delivery_InsertDate  ,F.DName ,A.DiscountValue 
    FROM [dbo].ShippingFollwoingTb AS A INNER JOIN [dbo].FollowingDetails AS B ON A.ID = B.Sh_followingID
    INNER JOIN category  AS C ON B.CategoryID =C.ID 
    INNER JOIN CoBranchTb AS D ON A.BranchID = D.ID
    INNER JOIN CoBranchTb AS E ON A.DeliveryPlaceID = E.ID
    INNER JOIN DeliveryStatusTb AS F ON A.DeliveredStatus = F.ID
    INNER JOIN [dbo].[CUSTEMPACCOUNTTB] AS G ON A.CodeID = G.ID 
    where a.IsActive= 1 
    ) as x 
    where x.ISID= ?
", [$code]);
     
            return response()->json([  'amana' =>   $results  ], 200);

            

    }







// (أ) إمكانية تتبيع الأمانة للزبون العاد بواسطة الكود ومعرفة حالة الأمانة

 public function TracAmana(Request $request , $isid , $code){
 
  $results = DB::select("
  select * from ( 
      select  a.SenderName COLLATE Arabic_CI_AS as SenderName, 
              a.SPhone1  COLLATE Arabic_CI_AS as SPhone1, 
              a.SPhone2  COLLATE Arabic_CI_AS as SPhone2, 
              a.RecievedName, 
              a.RPhone1, 
              a.RPhone2, 
              b.DName, 
              case when a.IsPaid = 0 then 'خالص' else 'غير خالص' end as IsPaid, 
              a.InsertDate, 
              a.Delivery_InsertDate, 
              a.Received_Date, 
              a.OverallTotal, 
              a.TaxiValue, 
              a.qt, 
              a.ISID, 
              a.Recieved_code, 
              a.Sender_Code 
      from internalshippingTb as a 
      inner join DeliveryStatusTb as b on a.DeliveredStatus = b.ID 

      union 

      select c.AccName, 
             c.LogPhone1, 
             c.LogPhone2, 
             a.RecievedName, 
             a.RPhone1, 
             a.RPhone2, 
             b.DName, 
             case when a.IsPaid = 0 then 'خالص' else 'غير خالص' end as IsPaid, 
             a.InsertDate, 
             a.Delivery_InsertDate, 
             a.Received_Date, 
             a.OverallTotal, 
             a.TaxiValue, 
             a.qt, 
             a.ISID, 
             a.Recieved_code, 
             a.Sender_Code 
      from ShippingFollwoingTb as a 
      inner join DeliveryStatusTb as b on a.DeliveredStatus = b.ID 
      inner join CUSTEMPACCOUNTTB as c on a.CodeID = c.ID 
  ) as x 
  where x.ISID = ? 
  and x.Recieved_code + x.Sender_Code like ?
", [$isid, '%' . $code . '%']);
     
            return response()->json([  'amana' =>   $results  ], 200);

            

    }










//  كود التاكد من حاله الامانة لو كانت ب 3 تفتح جمله انسرت لو غير رقم 3 هيقوله  DeliveredStatus

public function GetAmanaDetailsss(Request $request , $isid , $code){
 
  $results = DB::select("
 select x.DeliveredStatus ,x.ISID ,x.Recieved_code ,b.DName from ( 

select  a.ISID ,a.Recieved_code , a.DeliveredStatus  from internalshippingTb as a  

union 
select  a.ISID  ,a.Recieved_code ,a.DeliveredStatus   from ShippingFollwoingTb  as a  
) as x 
inner join DeliveryStatusTb as b on x.DeliveredStatus =b.ID
where x.ISID =  ?  and x.DeliveredStatus= 3 and x.Recieved_code =  ?
", [$isid,   $code  ]);
     
  return response()->json([  'status' =>   $results  ], 200);

            

    }





 public function InsertDetails(Request $request , $isid , $code , $longitude ,$latitude , $phone , $adress  ){
 
     
 

// Start transaction
DB::beginTransaction();

try {
    // Insert into TaxiDetails
    DB::insert("
        INSERT INTO [dbo].[TaxiDetails]
               ([ISID], [AddressDescription], [Recieved_code], [longitude], [Latitude], [Phone])
         VALUES (?, ?, ?, ?, ?, ?)
    ", [$isid, $adress, $code, $longitude, $latitude, $phone]);

    // Update internalshippingTb
    DB::update("
        UPDATE [dbo].[internalshippingTb]
        SET DeliveredStatus = 18, Latitude = ?, longitude = ?, AddressDescription = ?
        WHERE ISID = ?
    ", [$latitude, $longitude, $adress, $isid]);

    // Update ShippingFollwoingTb
    DB::update("
        UPDATE [dbo].[ShippingFollwoingTb]
        SET DeliveredStatus = 18, Latitude = ?, longitude = ?, AddressDescription = ?
        WHERE ISID = ?
    ", [$latitude, $longitude, $adress, $isid]);

    // Commit transaction
    DB::commit();
} catch (\Exception $e) {
    // Rollback transaction if something goes wrong
    DB::rollBack();
    throw $e;
}

 
         
  return response()->json([  'status' =>    "Success"  ], 200);
    
                
    
        }




// (أ)  كشف يظهر التعاملات مع الشركة للزبون العادي

 public function historyCustomer(Request $request , $phone , $from , $to ){
 
      $results = DB::select("
   select * from ( 

select  a.SenderName COLLATE Arabic_CI_AS as SenderName  
, a.SPhone1  COLLATE Arabic_CI_AS as SPhone1  , a.SPhone2  
COLLATE Arabic_CI_AS as SPhone2  ,a.RecievedName 
,a.RPhone1 ,a.RPhone2 ,b.DName , case when a.IsPaid  
 = 0  then 'خالص'  else 'غير خالص' 
end as IsPaid ,a.InsertDate ,a.Delivery_InsertDate ,a.Received_Date ,a.OverallTotal ,a.TaxiValue ,a.qt ,a.ISID ,a.Recieved_code	 ,a.Sender_Code 
from internalshippingTb as a inner join
 DeliveryStatusTb as b on a.DeliveredStatus = b.ID 
union 
select c.AccName  , c.LogPhone1 ,c.LogPhone2 ,a.RecievedName ,a.RPhone1 ,a.RPhone2 ,b.DName , case when a.IsPaid   = 0  then 'خالص'  else 'غير خالص' 
end as IsPaid ,a.InsertDate ,a.Delivery_InsertDate ,a.Received_Date ,a.OverallTotal ,a.TaxiValue ,a.qt ,a.ISID ,a.Recieved_code	 ,a.Sender_Code 

from ShippingFollwoingTb as a inner join DeliveryStatusTb as b on a.DeliveredStatus = b.ID
inner join CUSTEMPACCOUNTTB as  c on a.CodeID = c.ID 
) as x 
where   x.SPhone1  + x.SPhone2	+ X.RPhone2 +X.RPhone2  like '%'+ ? +'%'  AND X.InsertDate  BETWEEN  ?  AND  ?
    ", [$phone,   $from , $to  ]);
         
                return response()->json([  'history' =>   $results  ], 200);
    
                
    
        }




// جلب الامانة للمعرفة مقيمة او لاء
 public function checkRatedPackage(Request $request , $isid , $senderCode   ){
 
          $results = DB::select("
select x.ISID,case when x.Sender_Code =  ?  then CodeID_StauesSTarDorDRiver  

when x.Recieved_code =  ?  then StatuesForStarDriver  

end  as cloim , 
case when x.Sender_Code = ?  then 1 
when x.Recieved_code = ?  then 2  
end Code_status 
from ( 

SELECT a.ISID  , a.Recieved_code , Sender_Code , a.StatuesForStarDriver , CodeID_StauesSTarDorDRiver  
FROM [dbo].[internalshippingTb] AS a   
union  
SELECT a.ISID, a.Recieved_code , Sender_Code , a.StatuesForStarDriver , CodeID_StauesSTarDorDRiver   
FROM [dbo].[internalshippingTb] AS a   
) as x 
where x.ISID = ? and x.Recieved_code  + x.Sender_Code   like  '%' + ? +'%'
        ", [$senderCode,  $senderCode, $senderCode, $senderCode, $isid, $senderCode, ]);
             
                    return response()->json([  'check' =>   $results  ], 200);
        
                    
        //cloim / true -- rated / falsa
            }




//  كود جلب العميل
public function GetDriver(Request $request , $isid    ){
 
  $results = DB::select("
 select  a.ID  , A.AccName from [dbo].[CUSTEMPACCOUNTTB] as a inner join 
driver  as b on 
a.AccountCode  COLLATE Arabic_CI_AS  = b.Code  COLLATE Arabic_CI_AS 
INNER JOIN Driver_delivery_shipping  AS C ON  A.ID = C.DriverID 
INNER JOIN Driver_delivery_shipping_Details AS D ON C.Code_delivery= D.Code_delivery
WHERE D.ISID = ?
", [ $isid ]);
     
  return response()->json([  'driver' =>   $results  ], 200);

            
//cloim / true -- rated / falsa
    }




//   تحديث
public function UpdateRate(Request $request , $isid  , $senderCode   , $rateNumber  , $driver_id){
 
  
  $updateOne = DB::select("
update [internalshippingTb] set CodeID_StauesSTarDorDRiver =1 where ISID=  ?  and Sender_Code = ?
", [ $isid  , $senderCode  ]);



$updateTow = DB::select("
update [internalshippingTb] set StatuesForStarDriver = 1 where ISID= ?  and Recieved_code = ?
", [ $isid  , $senderCode  ]);


$updateThree = DB::select("
update ShippingFollwoingTb set CodeID_StauesSTarDorDRiver =1 where ISID=  ?  and Sender_Code =  ?
", [ $isid  , $senderCode  ]);


$updateFour = DB::select("
update ShippingFollwoingTb set StatuesForStarDriver =1 where ISID=  ? and Recieved_code  = ?
", [ $isid  , $senderCode  ]);


$updateFive = DB::select("
update Driver_Rating_Table set Stars_Drivers += 
  ? , NumberofUsers +=1 , Stars +=5
where CodeID = ?
", [ $rateNumber  , $driver_id]);
 
            return response()->json([  'driver' =>    "success"  ], 200);

            
 
    }





 public function GetAmanaEnterDelvery(Request $request){
   

  $user = Auth::user();

 
  $results = DB::select("
    select * from ( 
select A.ISID , A.SPhone1 , A.SPhone2 , A.RecievedName , A.RPhone1 , A.RPhone2 ,  CASE WHEN A.IsPaid = 0   THEN 'خالص'ELSE 'غير خالص' END AS IsPaid 
,B.Code_delivery ,A.TotalPrice ,A.TaxiValue ,A.Qt ,A.OverallTotal ,E.BName  AS BranchID ,D.BName AS DeliveryPlaceID,A.AddressDescription,B.DriverID
,a.BounsValue , a.longitude ,a.Latitude ,a.MapLink 
From internalshippingTb as a 
inner join Driver_delivery_shipping as b on a.ID_Delivery_Taxi = b.ID_Delivery 
INNER JOIN CoBranchTb AS E ON A.BranchID = E.ID 
INNER JOIN CoBranchTb AS D ON A.DeliveryPlaceID = D.ID 
where a.DeliveredStatus= 5 and a.IsActive =1 
UNION 
select A.ISID , A.SPhone1 , A.SPhone2 , A.RecievedName , A.RPhone1 , A.RPhone2 ,  CASE WHEN A.IsPaid = 0   THEN 'خالص'ELSE 'غير خالص' END AS IsPaid 
,B.Code_delivery ,A.TotalPrice ,A.TaxiValue ,A.Qt ,A.OverallTotal ,E.BName  AS BranchID ,D.BName AS DeliveryPlaceID,A.AddressDescription ,B.DriverID
,a.BounsValue , a.longitude ,a.Latitude ,a.MapLink 
From internalshippingTb as a 
inner join Driver_delivery_shipping as b on a.ID_Delivery_Taxi = b.ID_Delivery 
INNER JOIN CoBranchTb AS E ON A.BranchID = E.ID 
INNER JOIN CoBranchTb AS D ON A.DeliveryPlaceID = D.ID 
where a.DeliveredStatus= 5 and a.IsActive =1 
) as x 
where x.DriverID =  ?
", [4]);
// $user->account_ID
            return response()->json([  'amanaenterdelv' =>   $results  ], 200);

            

    }





  public function getMovsList(Request $request , $type){
   

  $user = Auth::user();

 if($type == "1"){


  $results = DB::select("
select * from ( 

select a.ISID , a.SenderName  COLLATE Arabic_CI_AS as SenderName 

, a.SPhone1 COLLATE Arabic_CI_AS as SPhone1
,a.SPhone2  COLLATE Arabic_CI_AS  as SPhone2 , a.RecievedName , a.RPhone1 ,a.RPhone2 ,a.Qt 
,a.TotalPrice ,a.BounsValue ,a.Delivery_InsertDate ,
a.Customer_DeliveryDate ,DiscountValue ,Received_Date ,TaxiValue ,b.DName ,c.BName as BranchID  , F.DriverID
,d.BName as DeliveryPlaceID  ,A.OverallTotal ,a.Driver_value ,case when a.IsPaid= 0   then 'غير خالص' else 'خالص' end as IsPaid 
from internalshippingTb as a 
inner join DeliveryStatusTb as b on a.DeliveredStatus =b.ID 
inner join CoBranchTb as c on a.BranchID = c.ID
inner join CoBranchTb as d on a.DeliveryPlaceID =  d.ID
inner join Driver_delivery_shipping_Details as e on a.ISID COLLATE Arabic_CI_AS   =e.ISID  COLLATE Arabic_CI_AS 
inner join Driver_delivery_shipping as f on e.Code_delivery = f.Code_delivery
where a.IsActive =1 and f.Type_delivery = 1  and (  Type_delivery_staues = 1 OR  Type_delivery_staues =2  ) and d.TypeBracnh = 0 
union 
select a.ISID ,g.AccName, g.LogPhone1 ,g.LogPhone2 , a.RecievedName , a.RPhone1 ,a.RPhone2 ,a.Qt 
,a.TotalPrice ,a.BounsValue ,a.Delivery_InsertDate ,
a.Customer_DeliveryDate ,DiscountValue ,Received_Date ,TaxiValue ,b.DName ,c.BName as BranchID  , F.DriverID
,d.BName as DeliveryPlaceID  ,A.OverallTotal ,a.Driver_value ,case when a.IsPaid= 0   then 'غير خالص' else 'خالص' end as IsPaid 
from ShippingFollwoingTb as a 
inner join DeliveryStatusTb as b on a.DeliveredStatus =b.ID 
inner join CoBranchTb as c on a.BranchID = c.ID
inner join CoBranchTb as d on a.DeliveryPlaceID =  d.ID
inner join Driver_delivery_shipping_Details as e on a.ISID COLLATE Arabic_CI_AS   =e.ISID  COLLATE Arabic_CI_AS 
inner join Driver_delivery_shipping as f on e.Code_delivery = f.Code_delivery
inner join CUSTEMPACCOUNTTB as  g on a.CodeID = g.ID
where a.IsActive =1 and f.Type_delivery = 1 and (  Type_delivery_staues = 1 OR  Type_delivery_staues =2  )and d.TypeBracnh = 0 
) as x 
where x.DriverID = ? ", [$user->account_ID]);

}else if($type == "2"){

  $results = DB::select("
select * from ( 

select a.ISID , a.SenderName  COLLATE Arabic_CI_AS as SenderName 

, a.SPhone1 COLLATE Arabic_CI_AS as SPhone1
,a.SPhone2  COLLATE Arabic_CI_AS  as SPhone2 , a.RecievedName , a.RPhone1 ,a.RPhone2 ,a.Qt 
,a.TotalPrice ,a.BounsValue ,a.Delivery_InsertDate ,
a.Customer_DeliveryDate ,DiscountValue ,Received_Date ,TaxiValue ,b.DName ,c.BName as BranchID  , F.DriverID
,d.BName as DeliveryPlaceID  ,A.OverallTotal ,a.Driver_value ,case when a.IsPaid= 0   then 'غير خالص' else 'خالص' end as IsPaid 
from internalshippingTb as a 
inner join DeliveryStatusTb as b on a.DeliveredStatus =b.ID 
inner join CoBranchTb as c on a.BranchID = c.ID
inner join CoBranchTb as d on a.DeliveryPlaceID =  d.ID
inner join Driver_delivery_shipping_Details as e on a.ISID COLLATE Arabic_CI_AS   =e.ISID  COLLATE Arabic_CI_AS 
inner join Driver_delivery_shipping as f on e.Code_delivery = f.Code_delivery
where a.IsActive =1 and f.Type_delivery = 1  and (  Type_delivery_staues = 1 OR  Type_delivery_staues =2  ) and d.TypeBracnh = 1 and  ( a.DeliveredStatus = 14 or a.DeliveredStatus= 3 )
union 
select a.ISID ,g.AccName, g.LogPhone1 ,g.LogPhone2 , a.RecievedName , a.RPhone1 ,a.RPhone2 ,a.Qt 
,a.TotalPrice ,a.BounsValue ,a.Delivery_InsertDate ,
a.Customer_DeliveryDate ,DiscountValue ,Received_Date ,TaxiValue ,b.DName ,c.BName as BranchID  , F.DriverID
,d.BName as DeliveryPlaceID  ,A.OverallTotal ,a.Driver_value ,case when a.IsPaid= 0   then 'غير خالص' else 'خالص' end as IsPaid 
from ShippingFollwoingTb as a 
inner join DeliveryStatusTb as b on a.DeliveredStatus =b.ID 
inner join CoBranchTb as c on a.BranchID = c.ID
inner join CoBranchTb as d on a.DeliveryPlaceID =  d.ID
inner join Driver_delivery_shipping_Details as e on a.ISID COLLATE Arabic_CI_AS   =e.ISID  COLLATE Arabic_CI_AS 
inner join Driver_delivery_shipping as f on e.Code_delivery = f.Code_delivery
inner join CUSTEMPACCOUNTTB as  g on a.CodeID = g.ID
where a.IsActive =1 and f.Type_delivery = 1 and (  Type_delivery_staues = 1  )and d.TypeBracnh = 1 and  ( a.DeliveredStatus = 14 or a.DeliveredStatus= 3 )
) as x 
where x.DriverID = ? ", [$user->account_ID]);


}else if($type == "3"){
  $results = DB::select("
select * from ( 

select a.ISID , a.SenderName  COLLATE Arabic_CI_AS as SenderName 

, a.SPhone1 COLLATE Arabic_CI_AS as SPhone1
,a.SPhone2  COLLATE Arabic_CI_AS  as SPhone2 , a.RecievedName , a.RPhone1 ,a.RPhone2 ,a.Qt 
,a.TotalPrice ,a.BounsValue ,a.Delivery_InsertDate ,
a.Customer_DeliveryDate ,DiscountValue ,Received_Date ,TaxiValue ,b.DName ,c.BName as BranchID  , F.DriverID
,d.BName as DeliveryPlaceID  ,A.OverallTotal ,a.Driver_value ,case when a.IsPaid= 0   then 'غير خالص' else 'خالص' end as IsPaid 
from internalshippingTb as a 
inner join DeliveryStatusTb as b on a.DeliveredStatus =b.ID 
inner join CoBranchTb as c on a.BranchID = c.ID
inner join CoBranchTb as d on a.DeliveryPlaceID =  d.ID
inner join Driver_delivery_shipping_Details as e on a.ISID COLLATE Arabic_CI_AS   =e.ISID  COLLATE Arabic_CI_AS 
inner join Driver_delivery_shipping as f on e.Code_delivery = f.Code_delivery
where a.IsActive =1 and f.Type_delivery = 1  and (  Type_delivery_staues = 1 OR  Type_delivery_staues =2  )  and  ( a.DeliveredStatus = 15 or a.DeliveredStatus=8     or a.DeliveredStatus= 9  )
union 
select a.ISID ,g.AccName, g.LogPhone1 ,g.LogPhone2 , a.RecievedName , a.RPhone1 ,a.RPhone2 ,a.Qt 
,a.TotalPrice ,a.BounsValue ,a.Delivery_InsertDate ,
a.Customer_DeliveryDate ,DiscountValue ,Received_Date ,TaxiValue ,b.DName ,c.BName as BranchID  , F.DriverID
,d.BName as DeliveryPlaceID  ,A.OverallTotal ,a.Driver_value ,case when a.IsPaid= 0   then 'غير خالص' else 'خالص' end as IsPaid 
from ShippingFollwoingTb as a 
inner join DeliveryStatusTb as b on a.DeliveredStatus =b.ID 
inner join CoBranchTb as c on a.BranchID = c.ID
inner join CoBranchTb as d on a.DeliveryPlaceID =  d.ID
inner join Driver_delivery_shipping_Details as e on a.ISID COLLATE Arabic_CI_AS   =e.ISID  COLLATE Arabic_CI_AS 
inner join Driver_delivery_shipping as f on e.Code_delivery = f.Code_delivery
inner join CUSTEMPACCOUNTTB as  g on a.CodeID = g.ID
where a.IsActive =1 and f.Type_delivery = 1 and (  Type_delivery_staues = 1  )and d.TypeBracnh = 1 and  ( a.DeliveredStatus = 15 or a.DeliveredStatus=8     or a.DeliveredStatus= 9  )
) as x 
where x.DriverID =  ? ", [$user->account_ID]);
}else if($type == "4"){

  $results = DB::select("
 select * from ( 

select a.ISID , a.SenderName  COLLATE Arabic_CI_AS as SenderName 

, a.SPhone1 COLLATE Arabic_CI_AS as SPhone1
,a.SPhone2  COLLATE Arabic_CI_AS  as SPhone2 , a.RecievedName , a.RPhone1 ,a.RPhone2 ,a.Qt 
,a.TotalPrice ,a.BounsValue ,a.Delivery_InsertDate ,
a.Customer_DeliveryDate ,DiscountValue ,Received_Date ,TaxiValue ,b.DName ,c.BName as BranchID  , F.DriverID
,d.BName as DeliveryPlaceID  ,A.OverallTotal ,a.Driver_value ,case when a.IsPaid= 0   then 'غير خالص' else 'خالص' end as IsPaid 
from internalshippingTb as a 
inner join DeliveryStatusTb as b on a.DeliveredStatus =b.ID 
inner join CoBranchTb as c on a.BranchID = c.ID
inner join CoBranchTb as d on a.DeliveryPlaceID =  d.ID
inner join Driver_delivery_shipping_Details as e on a.ISID COLLATE Arabic_CI_AS   =e.ISID  COLLATE Arabic_CI_AS 
inner join Driver_delivery_shipping as f on f.ID_Delivery =a.ID_Delivery_Taxi
where a.IsActive =1 and f.Type_delivery = 3 and e.Type_delivery_staues= 3  and a.DeliveredStatus= 3 
union 
select a.ISID ,g.AccName, g.LogPhone1 ,g.LogPhone2 , a.RecievedName , a.RPhone1 ,a.RPhone2 ,a.Qt 
,a.TotalPrice ,a.BounsValue ,a.Delivery_InsertDate ,
a.Customer_DeliveryDate ,DiscountValue ,Received_Date ,TaxiValue ,b.DName ,c.BName as BranchID  , F.DriverID
,d.BName as DeliveryPlaceID  ,A.OverallTotal ,a.Driver_value ,case when a.IsPaid= 0   then 'غير خالص' else 'خالص' end as IsPaid 
from ShippingFollwoingTb as a 
inner join DeliveryStatusTb as b on a.DeliveredStatus =b.ID 
inner join CoBranchTb as c on a.BranchID = c.ID
inner join CoBranchTb as d on a.DeliveryPlaceID =  d.ID
inner join Driver_delivery_shipping_Details as e on a.ISID COLLATE Arabic_CI_AS   =e.ISID  COLLATE Arabic_CI_AS 
inner join Driver_delivery_shipping as f on f.ID_Delivery = a.ID_Delivery_Taxi
inner join CUSTEMPACCOUNTTB as  g on a.CodeID = g.ID
where a.IsActive =1 and f.Type_delivery = 3 and d.TypeBracnh = 1  and e.Type_delivery_staues= 3 and  a.DeliveredStatus= 3 
) as x 
where x.DriverID = ? ", [$user->account_ID]);
}else if($type == "5"){
  $results = DB::select("select * from ( 

select a.ISID , a.SenderName  COLLATE Arabic_CI_AS as SenderName 

, a.SPhone1 COLLATE Arabic_CI_AS as SPhone1
,a.SPhone2  COLLATE Arabic_CI_AS  as SPhone2 , a.RecievedName , a.RPhone1 ,a.RPhone2 ,a.Qt 
,a.TotalPrice ,a.BounsValue ,a.Delivery_InsertDate ,
a.Customer_DeliveryDate ,DiscountValue ,Received_Date ,TaxiValue ,b.DName ,c.BName as BranchID  , F.DriverID
,d.BName as DeliveryPlaceID  ,A.OverallTotal ,a.Driver_value ,case when a.IsPaid= 0   then 'غير خالص' else 'خالص' end as IsPaid 
from internalshippingTb as a 
inner join DeliveryStatusTb as b on a.DeliveredStatus =b.ID 
inner join CoBranchTb as c on a.BranchID = c.ID
inner join CoBranchTb as d on a.DeliveryPlaceID =  d.ID
inner join Driver_delivery_shipping_Details as e on a.ISID COLLATE Arabic_CI_AS   =e.ISID  COLLATE Arabic_CI_AS 
inner join Driver_delivery_shipping as f on f.ID_Delivery =a.ID_Delivery_Taxi
where a.IsActive =1 and f.Type_delivery = 3 and e.Type_delivery_staues= 4
union 
select a.ISID ,g.AccName, g.LogPhone1 ,g.LogPhone2 , a.RecievedName , a.RPhone1 ,a.RPhone2 ,a.Qt 
,a.TotalPrice ,a.BounsValue ,a.Delivery_InsertDate ,
a.Customer_DeliveryDate ,DiscountValue ,Received_Date ,TaxiValue ,b.DName ,c.BName as BranchID  , F.DriverID
,d.BName as DeliveryPlaceID  ,A.OverallTotal ,a.Driver_value ,case when a.IsPaid= 0   then 'غير خالص' else 'خالص' end as IsPaid 
from ShippingFollwoingTb as a 
inner join DeliveryStatusTb as b on a.DeliveredStatus =b.ID 
inner join CoBranchTb as c on a.BranchID = c.ID
inner join CoBranchTb as d on a.DeliveryPlaceID =  d.ID
inner join Driver_delivery_shipping_Details as e on a.ISID COLLATE Arabic_CI_AS   =e.ISID  COLLATE Arabic_CI_AS 
inner join Driver_delivery_shipping as f on f.ID_Delivery = a.ID_Delivery_Taxi
inner join CUSTEMPACCOUNTTB as  g on a.CodeID = g.ID
where a.IsActive =1 and f.Type_delivery = 3 and d.TypeBracnh = 1  and e.Type_delivery_staues= 4 
) as x 
where x.DriverID = ? 
", [$user->account_ID]);
}
     
            return response()->json([  'amanaListMovs' =>   $results  ], 200);

            

    }



 public function updateStatus(Request $request , $isid , $codeStatus  , $status ){
   
      // $status == 14
      // $status == 15
 $user = Auth::user();
 
 // Update internalshippingTb
 DB::update("
     UPDATE internalshippingTb
     SET Code_status = ?,
         DeliveredStatus = ?,
         Customer_DeliveryDate = GETDATE(),
         Received_Date = GETDATE()
     WHERE ISID = ?
 ", [$codeStatus,  $status , $isid]);

 // Update ShippingFollwoingTb
 DB::update("
     UPDATE ShippingFollwoingTb
     SET Code_status = ?,
         DeliveredStatus = ?,
         Customer_DeliveryDate = GETDATE(),
         Received_Date = GETDATE()
     WHERE ISID = ?
 ", [$codeStatus,   $status , $isid]);

 return response()->json(['message' => 'Status updated successfully']);

            

    }

 

    public function getPackagesDriver(Request $request){

      $user = Auth::user();

      
      $drivers   =  Driver_delivery_shipping::with('branch' , 'place')->where('DriverID' , $user->account_ID )->get();
  

      return response()->json([  'packages' =>   $drivers  ], 200);

    }




    public function GetStatusTable(Request $request){

      
      $status  =  DeliveryStatusTb_Count::with('status')->get();
  

      return response()->json([  'status' =>    $status ], 200);

    }
  




    public function GetHome(Request $request){

      $user = Auth::user();
      $wallet =  Wallet::with('currency')->where('user_CUSTEMPACCOUNTTB_id' , $user->account_ID)->first();
  

      return response()->json([  'wallet' =>    $wallet ], 200);

    }
  

    public function GetNotification(Request $request){
    

      $user = Auth::user();
      
       
      $notification  = appnotifications::where('account_id' , (string)$user->account_ID)->get();
      
      return response()->json([  'notifications' =>   $notification ], 200);
 
    }





    public function getDetail(Request $request , $id , $type){
 

      if($type ==  "ORG"){
        $following = ShippingFollwoingTb::with('branch' , 'items.category')->where('id' , $id)->first();
      }else{
        $following = RhallaMobile_ShippingFollwoingTb::with('branch' , 'items.category')->where('id' , $id)->first();
      }



      $user =   Auth::user();
      $branches = CoBranchTb::where('ID', '!=',  $user->BranchID)->get();
      $category = category::get();

      return response()->json([  'following' =>  $following  , 'branches'=> $branches  ,  'category'=>  $category     ], 200);
    }


    public function GetListShipmentByID(Request $request , $id ){

      $user = Auth::user();

      $following = ShippingFollwoingTb::with('branch' , 'items.category')->where('DeliveredStatus' , $id)->where('CodeID' , $user->account_ID )->orderBy('ID', 'DESC')->get();
  
      return response()->json([  'following' =>  $following  ], 200);

    }


   public function GetListShipment(Request $request){
    $user = Auth::user();

    $following = RhallaMobile_ShippingFollwoingTb::with('branch' , 'items.category')->where('DeliveredStatus' , '0')->where('CodeID' , $user->account_ID )->orderBy('ID', 'DESC')->get();

    return response()->json([  'following' =>  $following  ], 200);
   }




    public function getDropDownShip(Request $request){

      $user =   Auth::user();
      
   
      $branches = CoBranchTb::where('ID', '!=',  $user->BranchID)->get();
      $category = category::get();

 
      return response()->json([  'branches' =>  $branches  , 'category'=>  $category ,       ], 200);
    }


    public function addShipping(Request $request){
     
   
       $user =   Auth::user();


       if($request->type == "ORG" && $request->edit == "yes" ){

        $ship =   ShippingFollwoingTb::where('id' , $request->ID )->update([
          'RecievedName'=> $request->RecievedName,
          'RPhone1'=> $request->RPhone1,
          'RPhone2'=> $request->RPhone2,
          
         
        ]);


        return response()->json(['status' => "success" ,  'message'=> 'success' ], 200);

       }


       $items = $request->items;
 
       $totalAmount = 0;
       $totalPrice = 0;
       foreach ($items as $item  ) {
          
        $totalAmount +=   $item['qty'];

        $totalPrice  +=  ( $item['price'] * $item['qty']);

 
       }


       if($request->edit == "yes"){

        RhallaMobile_FollowingDetails::where('Sh_followingID', $request->ID)->delete();
        $ship =  RhallaMobile_ShippingFollwoingTb::where('id' , $request->ID )->update([
          'RecievedName'=> $request->RecievedName,
          'RPhone1'=> $request->RPhone1,
          'RPhone2'=> $request->RPhone2,
          'Qt'=> $totalAmount,
          'TotalPrice'=> $totalPrice,
         
        ]);

        

        foreach ($items as $item  ) {
          
          $itemsData[] = [
            'Sh_followingID' => $request->ID,
            'Quantity' => $item['qty'],
            'Price' => $item['price'],
            'TotalPrice' =>  ( $item['qty']  * $item['price'] ),
            'CategoryID' => $item['category_id'],
    
        ];
   
         }
  
  
         RhallaMobile_FollowingDetails::insert($itemsData);


      //   foreach ($items as $item) {
      //     $itemsData = [
      //         'Quantity' => $item['qty'],
      //         'Price' => $item['price'],
      //         'TotalPrice' => ($item['qty'] * $item['price']),
      //         'CategoryID' => $item['category_id'],
      //     ];
      
      //     RhallaMobile_FollowingDetails::where('id', $item['id'])->update($itemsData);
      // }

      return response()->json(['status' => "success" ,  'message'=> 'success' ], 200);

       }else{


        $ship = new RhallaMobile_ShippingFollwoingTb;
        $ship->CodeID =   $user->account_ID;
        $ship->TypeID =   4;
        $ship->RecievedName =   $request->RecievedName;
        $ship->RPhone1 =   $request->RPhone1;
        $ship->RPhone2 =   $request->RPhone2;
        $ship->DeliveryPlaceID =   $request->DeliveryPlaceID;
        
        $ship->Qt =    $totalAmount;
        $ship->TotalPrice =   $totalPrice;
        $ship->save();






        foreach ($items as $item  ) {
          
          $itemsData[] = [
            'Sh_followingID' => $ship->id,
            'Quantity' => $item['qty'],
            'Price' => $item['price'],
            'TotalPrice' =>  ( $item['qty']  * $item['price'] ),
            'CategoryID' => $item['category_id'],
    
        ];
   
         }
  
  
         RhallaMobile_FollowingDetails::insert($itemsData);
  
         return response()->json(['status' => "success" ,  'message'=> 'success' ], 200);
         
     

       }
    
 


       


    }


    public function getTheOwntrans(Request $request){

      $from_date = $request->from_date;

      $to_date = $request->to_date;

      $type =  $request->type;

 if($type == "ALL"){
   $accActivtb  = AccounsActivityTb::with('branch' , 'currency')->whereBetween('InsertDate', [$from_date, $to_date])->get();

 }else{
   $accActivtb  = AccounsActivityTb::with('branch' , 'currency')->where('TypeMobile' , $type)->whereBetween('InsertDate', [$from_date, $to_date])->get();

 }


      return response()->json(['history' =>  $accActivtb       ], 200);
       
     }



    public function getCurrenices(Request $request){

        $currency = CurrencyMainTb::get();


        return response()->json(['currencies' =>  $currency       ], 200);
     }


     public function GetDetailsSendMoney(Request $request){

        $currency = CurrencyMainTb::get();

        $branches = CoBranchTb::get();
        
 
        return response()->json(['currencies' =>  $currency  , 'branches' =>  $branches        ], 200);
     }

     
     public function GetSentMoney(Request $request){
       $user =   Auth::user();
    
       $moneyTrans = MonyTransTb::with('branch' , 'SCurrency' , 'RCurrency')->where('CodeID' , $user->account_ID  )->orderBy('ID', 'DESC')-> get();

      // $branches = CoBranchTb::get();
      

      return response()->json(['sent' =>   $moneyTrans      ], 200);
   }
}
