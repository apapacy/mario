<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Eco_sbed_tree extends SimpleTable_Controller {

 const TABLE = 'eco_sbed_tree', NEXT_ID = 'USER',
 PAGE_LENGTH = 17;
 
 public static $FIELDS =  array( 'root', 'koddet', 'kodce',
     'root_name', 'koddet_name', 'kodce_name','kol', 'path' );
 public static $ORDER =  array( 'root_name', 'kodce_name' );
 public static $UPDATABLE =  array( 'error' );
 public static $KEY =  array( 'root',  'koddet', 'kodce' );
 
 
 public function setfilter( ) {
   parent::setfilter( );
   //$uid = $_GET['uid'];
   //$model = $this->from_json( $this->contents, static::$FIELDS );
   //$this->session->set_userdata( 'table:filter' . $uid, $model);
   $this->db->insert( 'journal', array( 'prim'=> $this->contents ) );
 }
 
 
 
}
