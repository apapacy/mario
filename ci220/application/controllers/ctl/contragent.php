<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Contragent extends SimpleTable_Controller {

 const TABLE = 'contragent',
   PAGE_LENGTH = 17, 
   NEXT_ID = '';
 
 public static $FIELDS =  array( '"id"', 'egr','uaname', 'name');
 public static $ORDER =  array( 'name' );
 public static $KEY =  array( '"id"' );
 function __construct( ) {
    parent::__construct();
 }


}
  
