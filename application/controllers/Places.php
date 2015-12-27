<?php

class Places extends MY_SimpleREST_Controller {

 const TABLE = 'places',
 PAGE_LENGTH = 23;

 public static $FIELDS =  array( 'id', 'region', 'district', 'place','code');
 public static $ORDER =  array( 'place', 'region', 'district' );
 public static $KEY =  array( 'id' );

 function __construct( ) {
     parent::__construct();
 }

 function index(){
   die('adminplaces/index');
 }

}
