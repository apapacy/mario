<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Abc extends BBCombobx_Controller {

 const TABLE = 'contragent',
   ID = 'id',
   DISPLAY_VALUE = 'name',
   //SEARCH = 'search',
   DISPLAY_LIST = "egr || '#' || name as search",
   STRICT = 'STRICT';
  public static $SEARCH = array( 'name','egr' );
}
  
