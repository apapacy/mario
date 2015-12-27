<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Dogovor_price_search extends SimpleTable_Controller {

 const TABLE = 'dogovor_price_search',
   PAGE_LENGTH = 17, 
   NEXT_ID = 'USER';

  public static $FIELDS =  array( 'dogovor_id', '"id"', 'nomen', 'assort', 'vendor', 'profile', 'size', 'ei', 'kol', 'price', 'pricends','memo',
  'type_name','accept','contragent_name','nd','dated','rnd','rdated');
  public static $ORDER =  array( 'nomen','assort','dated' );
  public static $KEY =  array( 'dogovor_id', '"id"' );
  public static $UPDATABLE =  array( 'memo');
 
  function __construct( ) {
    parent::__construct();
  }
  protected function _before_insert( &$model, $id ) {
  }

  protected function _before_update( &$model) {
  }
  
}
  
