<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Nabor extends SimpleTable_Controller {

 const TABLE = 'nabor',
 VIEW = 'nabor_view',
 PAGE_LENGTH = 17,
 NEXT_ID = 'USER';
 
 public static $FIELDS =  array( 'kodiz',  'koddet', 'kodiz_name', 'koddet_name', 'kol','nv','rc' );
 public static $ORDER =  array( 'kodiz_name', 'koddet_name' );
 public static $ORDERS =  array( 'kodiz_name', 'koddet_name' );
 public static $KEY =  array( 'kodiz', 'koddet' );
 public static $UPDATABLE =  array( 'kodiz', 'koddet', 'kol' );


}
  
