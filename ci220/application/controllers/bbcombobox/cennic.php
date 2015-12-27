<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Cennic extends BBCombobx_Controller {

 const TABLE = 'cennic',
   ID = 'kod',
   DISPLAY_VALUE = "trim(name) ||' (' || nv || ' мин.)' as name_nv",
   DISPLAY_LIST = "name",
   STRICT = 'LESS';
  public static $SEARCH = array( 'name' ),
    $ORDER = array( 'name' ),
    $KEY = array( 'kod' );

}
  
