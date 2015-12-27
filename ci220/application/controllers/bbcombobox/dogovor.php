<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Dogovor extends BBCombobx_Controller {

 const TABLE = 'dogovor_view',
   ID = 'id',
   DISPLAY_VALUE = 'search',
   //SEARCH = 'search',
   DISPLAY_LIST = "search",
   STRICT = 'LESS';
  public static $SEARCH = array( 'search' );
  //public static $ORDER = array( 'name' );
  public static $KEY = array( 'id' );

}
  
