<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Doc_h extends SimpleTable_Controller {

 const TABLE = 'doc_h',
 PAGE_LENGTH = 17;
 
 public static $FIELDS =  array( 'kod', 'datedoc', 'viddoc', 'prim' );
 public static $ORDER =  array( 'kod' );
 public static $KEY =  array( 'kod' );


}
  
