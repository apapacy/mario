<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Tipop extends BBCombobx_Controller {

 const TABLE = 'tipop',
   ID = 'kod',
   DISPLAY_VALUE = 'name',
   //SEARCH = 'search',
   DISPLAY_LIST = "name",
   STRICT = 'MEDIUM';
  public static $SEARCH = array( 'name' );
  public static $ORDER = array( 'name' );
  public static $KEY = array( 'kod' );

}
  
