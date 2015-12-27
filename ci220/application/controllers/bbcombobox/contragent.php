<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Contragent extends BBCombobx_Controller {

 const TABLE = 'contragent',
   ID = 'id',
   DISPLAY_VALUE = 'name',
   //SEARCH = 'search',
   DISPLAY_LIST = "name",
   STRICT = 'LESS';
  public static $SEARCH = array( 'name', 'egr', 'uaname' );
  //public static $ORDER = array( 'name' );
  public static $KEY = array( 'id' );

}
  
