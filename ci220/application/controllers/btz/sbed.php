<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Sbed extends SimpleTable_Controller {

 const TABLE = 'sbed',
 VIEW = 'sbed_tree',
 PAGE_LENGTH = 17,
 NEXT_ID = 'USER';
 
 public static $FIELDS =  array( 'root','kodce',  'koddet', 'kodce_name', 'koddet_name', 'kol',
   '(select count(*) from sbed c where c.kodce=sbed_tree.koddet) as _ccount' );
 public static $ORDER =  array( 'koddet_name' );
 public static $KEY =  array( 'kodce', 'koddet' );
 public static $UPDATABLE =  array( 'kodce', 'koddet', 'kol' );
 public static $PARENT =  array( 'root' );
 public static $CHILD =  array( 'koddet' );
 public static $PARENT_INITIAL =  array( -1 );


}
  
