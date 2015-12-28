<?php

class Places extends MY_SimpleREST_Controller {

 const TABLE = 'places',
 PAGE_LENGTH = 23;

 public static $FIELDS =  array( 'id', 'region_id', 'district_id', 'name');
 public static $ORDER =  array( 'name' );
 public static $KEY =  array( 'id' );

 function __construct( ) {
     parent::__construct();
 }

}
