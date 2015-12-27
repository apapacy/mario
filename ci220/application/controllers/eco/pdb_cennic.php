<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Pdb_cennic extends SimpleTable_Controller {

 const TABLE = 'eco_cennic', VIEW = 'eco_cennic_view', NEXT_ID = 'USER',
 PAGE_LENGTH = 17;
 
 public static $FIELDS =  array( 'kodiz',  'koddet', 'kodiz_name', 'koddet_name',
       'depstk', 'nop', 'cen', 'dt' );
 public static $ORDER =  array( 'koddet_name', 'nop');
 public static $UPDATABLE =  array( 'kodiz',  'koddet', 'depstk', 'nop' );
 public static $KEY =  array( 'koddet', 'nop' );
 
 


}
  
