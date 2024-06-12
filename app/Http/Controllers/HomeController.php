<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }


    public function testConnection(){

    


        // $host = '93.158.238.134';
        // $user = 'RhallaMo';
        // $pass = 'RhallaMo2024@_2024';
        // $db   = 'RhallaMobile';
        // $conn = "DRIVER={ODBC Driver 17 for SQL Server};SERVER=$host;PORT=1433;DATABASE=$db";
        
        // // Open connection
        // $db_connect = odbc_connect($conn, $user, $pass);
        
        // // Check for successful connection
        // if ( $db_connect ) {
        //     echo 'Beer time!';
        // } else {
        //     die('Error connecting...');
        // }



        $serverName = "93.158.238.134,1433"; // Replace with your SQL Server's name or IP address and the port number
        $connectionOptions = array(
            "Database" => "RhallaMobile", // Replace with your database name
            "Uid" => "RhallaMo", // Replace with your username
            "PWD" => "RhallaMo2024@_2024" // Replace with your password
        );
        
        // Attempt to connect to the database
        $conn = sqlsrv_connect($serverName, $connectionOptions);
        
        if ($conn === false) {
            // Connection failed
            echo "Unable to connect to SQL Server.\n";
            die(print_r(sqlsrv_errors(), true));
        } else {
            echo "Connected to SQL Server successfully.\n";
        
            // Example query
            $query = "SELECT @@VERSION AS SQL_VERSION;";
            
            // Execute the query
            $stmt = sqlsrv_query($conn, $query);
        
            if ($stmt === false) {
                // Query execution failed
                echo "Error executing query.\n";
                die(print_r(sqlsrv_errors(), true));
            } else {
                // Query executed successfully
                while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
                    echo "SQL Server version: " . $row['SQL_VERSION'] . "\n";
                }
        
                // Free the statement and close the connection
                sqlsrv_free_stmt($stmt);
                sqlsrv_close($conn);
            }
        }
       

    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function home()
    {
        return view('index');
    }
}
