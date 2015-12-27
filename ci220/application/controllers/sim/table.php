<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Table extends SimpleTable_Controller {

 const TABLE = 'cennic',
 PAGE_LENGTH = 23,
 NEXT_ID = 'USER';
 
 public static $FIELDS =  array( 'kod', 'name','det', 'nv', 'rc', 'nvu', 'rcu', 'nvr', 'rcr', 'izs', 'kodiz', 'uc');
 public static $ORDER =  array( 'name', 'det', 'kod' );
 public static $KEY =  array( 'kod' );
 
 public function index( $name ) {
  echo $name;
 }

}
  
