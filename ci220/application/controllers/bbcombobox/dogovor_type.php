<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Dogovor_type extends BBCombobx_Controller {

 const TABLE = 'dogovor_type',
   ID = 'id',
   DISPLAY_VALUE = 'name',
   //SEARCH = 'search',
   DISPLAY_LIST = "name",
   STRICT = 'LESS';
  public static $SEARCH = array( 'name' );
  public static $ORDER = array( 'name' );
  public static $KEY = array( 'id' );

}
  
