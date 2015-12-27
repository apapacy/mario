<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Izdel extends BBCombobx_Controller {

 const TABLE = 'izdel',
   ID = 'kod',
   DISPLAY_VALUE = 'name',
   //SEARCH = 'search',
   DISPLAY_LIST = "name",
   STRICT = 'LESS';
  public static $SEARCH = array( 'name' );
  public static $ORDER = array( 'name' );
  public static $KEY = array( 'kod' );

}
  
