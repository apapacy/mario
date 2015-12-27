<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Cennic extends SimpleTable_Controller {

 const TABLE = 'cennic_view',
 PAGE_LENGTH = 23;
 
 public static $FIELDS =  array( 'kod as _sur', 'kod', 'name','det', 'nv', 'rc', 'nvu', 'rcu', 'nvr', 'rcr', 'izs', 'kodiz', 'uc');
 public static $ORDER =  array( 'name', 'det', 'kod' );
 public static $KEY =  array( 'kod' );

 function __construct( ) {
     parent::__construct();
 }

}
  
