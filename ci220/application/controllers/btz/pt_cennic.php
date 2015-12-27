<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Pt_cennic extends SimpleTable_Controller {

 const TABLE = 'pt_cennic_view',
 PAGE_LENGTH = 23,
 NEXT_ID = 'USER';
 
 public static $FIELDS =  array( 'kodd', 'naimd', 'det', 'kod','name','izs', 'kodiz');
 public static $ORDER =  array( 'naimd', 'kodd');
 public static $UPDATABLE =  array( 'kodd', 'naimd', 'det','izs', 'kodiz');
 public static $KEY =  array( 'kodd' );

}
  
