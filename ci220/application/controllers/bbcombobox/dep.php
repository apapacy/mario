<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Dep extends BBCombobx_Controller {

 const TABLE = 'dep',
   ID = 'name',
   DISPLAY_VALUE = 'name',
   //SEARCH = 'search',
   DISPLAY_LIST = "name",
   STRICT = 'LESS';
  public static $SEARCH = array( 'name' );
  public static $ORDER = array( 'name' );
  public static $KEY = array( 'name' );

}
  
